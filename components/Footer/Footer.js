import React from "react";
import classes from "./Footer.module.scss";
import Logo from "../../public/images/Logo.png";
import Image from "next/image";

const Footer00 = () => {
  return (
    <div className={classes.full}>
      {" "}
      <footer className={classes.footer}>
        <h1 className={classes.headingPrimary}>
          <span className={classes.headingPrimary__main}> Cuvelier</span>
        </h1>

        <div className={classes.container}>
          <div className={classes.footer__navigation}>
            <ul>
              <li className={classes.footer__item}>
                <a href="/" className={classes.footer__link}>
                  Accueil
                </a>
              </li>
              <li className={classes.footer__item}>
                <a href="/produits" className={classes.footer__link}>
                  Nos produits
                </a>
              </li>
              <li className={classes.footer__item}>
                <a href="/moyens" className={classes.footer__link}>
                  Nos moyens
                </a>
              </li>
              <li className={classes.footer__item}>
                <a href="/actualites" className={classes.footer__link}>
                  Nos actualités
                </a>
              </li>
              <li className={classes.footer__item}>
                <a href="/contact" className={classes.footer__link}>
                  Contactez-nous
                </a>
              </li>
            </ul>
          </div>
          <div className="col-1-of-2">
            <p className={classes.footer__copyright}>
              Réalisation
              <a href="#" className={classes.footer__link}>
                Lionel Ignaes
              </a>
              <br></br>
              Copyright Cuvelier&copy;
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer00;
