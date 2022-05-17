import { useState, useEffect } from "react";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { addToCart, refreshNumber } from "../../store/Actions";

import classes from "./ProductItem.module.scss";

const ProductItem = ({ product, handleCheck }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  const [number, setNumber] = useState(1);

  useEffect(() => {
    const check = () => {
      cart.map((item) => {
        if (item._id == product._id) {
          setNumber(item.quantity);
        }
        return;
      });
    };

    check();
  }, []);

  const quantity = (action) => {
    switch (action) {
      case "plus":
        if (number < product.inStock) {
          setNumber(number + 1);
        }
        break;
      case "moins":
        if (number != 0) {
          setNumber(number - 1);
        }
        break;
      default:
        break;
    }
  };
  /*   onClick={() => dispatch(increase(cart, product._id))} */
  const addThisItems = (number) => {
    refreshNumber(cart, product._id, number);
    dispatch(addToCart(product, cart, number));
    console.log("suite");
  };

  const userLink = () => {
    return (
      <>
        <button
          className="btn btn-success"
          style={{ marginLeft: "5px", flex: 1 }}
          disabled={product.inStock === 0 ? true : false}
          onClick={() => addThisItems(number)}
        >
          Acheter
          <i
            className={`fas fa-shopping-cart fa-1x position-relative ${classes.cart}`}
            aria-hidden="true"
          ></i>{" "}
        </button>
      </>
    );
  };

  const adminLink = () => {
    return (
      <>
        <Link href={`create/${product._id}`}>
          <a className="btn btn-info" style={{ marginRight: "5px", flex: 1 }}>
            Editer
          </a>
        </Link>
        <button
          className="btn btn-danger"
          style={{ marginLeft: "5px", flex: 1 }}
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() =>
            dispatch({
              type: "ADD_MODAL",
              payload: [
                {
                  data: "",
                  id: product._id,
                  title: product.title,
                  type: "DELETE_PRODUCT",
                },
              ],
            })
          }
        >
          Supprimer
        </button>
      </>
    );
  };

  return (
    <div className={`${classes.card}`}>
      {auth.user && auth.user.role === "admin" && (
        <input
          type="checkbox"
          checked={product.checked}
          className="position-absolute"
          style={{ height: "20px", width: "20px" }}
          onChange={() => handleCheck(product._id)}
        />
      )}

      <Link href={`product/${product._id}`}>
        <img
          className={`${classes.cardImgTop}`}
          src={product.images[0].url}
          alt={product.images[0].url}
        />
      </Link>

      <div className={`${classes.cardBody}`}>
        <Link href={`product/${product._id}`}>
          <div>
            <h5
              className={`${classes.cardTitle} text-capitalize`}
              title={product.title}
            >
              {product.title}
            </h5>

            <p className={`${classes.cardText}`} title={product.description}>
              {product.description}
            </p>
          </div>
        </Link>
        <div className={`${classes.center}`}>
          <button
            className="btn btn-outline-secondary"
            onClick={() => quantity("moins")}
            disabled={product === 1 ? true : false}
          >
            {" "}
            -{" "}
          </button>

          <span className="px-3">{number}</span>

          <button
            className="btn btn-outline-secondary"
            onClick={() => quantity("plus")}
            disabled={product === product.inStock ? true : false}
          >
            {" "}
            +{" "}
          </button>
        </div>

        <div className={`${classes.center}`} style={{ paddingLeft: "6px" }}>
          <span className={`${classes.price}`}>
            {product.price.toString().replace(".", ",")}€{" "}
          </span>
          <span>TTC</span>
        </div>

        {product.inStock > 0 ? (
          <h6 style={{ paddingLeft: "6px" }}>En stock: {product.inStock}</h6>
        ) : (
          <h6 className="text-danger" style={{ paddingLeft: "6px" }}>
            En rupture
          </h6>
        )}
        <div className="row justify-content-between mx-0">
          {!auth.user || auth.user.role !== "admin" ? userLink() : adminLink()}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
