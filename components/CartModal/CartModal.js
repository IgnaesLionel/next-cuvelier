import CartItemModal from "../CartItemModal/CartItemModal";
import classes from "./CartModal.module.scss";
import React, { useState } from "react";
import Link from "next/link";

const CartModal = ({ cart, dispatch, showModal, setShowModal }) => {
  const addClasses = () => {
    let cartModalShow = showModal ? `${classes.cartModalShow}` : null;
    return cartModalShow;
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`${classes.cartModal} ${addClasses()}`}
      onMouseOver={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
    >
      <button
        onClick={() => {
          handleCloseModal();
        }}
        className={`${classes.cartModalButton2}`}
      >
        Valider ma commande
      </button>{" "}
      {cart.map((item) => (
        <CartItemModal
          key={item._id}
          item={item}
          dispatch={dispatch}
          cart={cart}
        />
      ))}{" "}
      <Link href="/cart">
        <button
          onClick={() => {
            handleCloseModal();
          }}
          className={`${classes.cartModalButton}`}
        >
          Voir mon panier
        </button>
      </Link>
    </div>
  );
};

export default CartModal;
