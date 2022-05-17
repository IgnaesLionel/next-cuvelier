import React, { useState } from "react";
import classes from "./FullScreenMenu.module.scss";
import Link from "next/link";

const FullScreenMenu = () => {
  const [count, setCount] = useState(false);

  return (
    <div className={classes.navigation}>
      <input
        checked={count}
        type="checkbox"
        className={classes.navigation__checkbox}
        id="navi-toggle"
        onClick={() => {
          setCount(!count);
        }}
      ></input>
      <label htmlFor="navi-toggle" className={classes.navigation__button}>
        <span className={classes.navigation__icon}></span>
      </label>

      <div className={classes.navigation__background}>&nbsp;</div>

      <nav className={classes.navigation__nav}>
        <ul className={classes.navigation__list}>
          {count ? (
            <Link href={"/"}>
              <li className={classes.navigation__item}>
                <a
                  href="/"
                  className={classes.navigation__link}
                  onClick={() => {
                    setCount(false);
                  }}
                >
                  <span>01</span>Accueil
                </a>{" "}
              </li>
            </Link>
          ) : null}

          {count ? (
            <Link href={"/produits"}>
              <li className={classes.navigation__item}>
                <a
                  href="/"
                  className={classes.navigation__link}
                  onClick={() => {
                    setCount(false);
                  }}
                >
                  <span>02</span>Nos produits
                </a>{" "}
              </li>
            </Link>
          ) : null}
          {count ? (
            <Link href={"/moyens"}>
              <li className={classes.navigation__item}>
                <a
                  href="/"
                  className={classes.navigation__link}
                  onClick={() => {
                    setCount(false);
                  }}
                >
                  <span>03</span>Nos moyens
                </a>
              </li>
            </Link>
          ) : null}
          {count ? (
            <Link href={"/actualites"}>
              <li className={classes.navigation__item}>
                <a
                  href="/"
                  className={classes.navigation__link}
                  onClick={() => {
                    setCount(false);
                  }}
                >
                  <span>04</span>actualités
                </a>{" "}
              </li>
            </Link>
          ) : null}

          {count ? (
            <Link href={"/contact"}>
              <li className={classes.navigation__item}>
                <a
                  href="/"
                  className={classes.navigation__link}
                  onClick={() => {
                    setCount(false);
                  }}
                >
                  <span>05</span> Contactez-nous
                </a>
              </li>
            </Link>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default FullScreenMenu;
