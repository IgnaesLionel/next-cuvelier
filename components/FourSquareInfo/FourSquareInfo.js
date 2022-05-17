import React from "react";
import classes from "./FourSquareInfo.module.scss";
import Image from "next/image";
import img1 from "./croissant.png";
import img2 from "./macaron.png";
import img3 from "./burger.png";
import img4 from "./rouleau.png";
//use icon-font.css with fonts folder

const ForSquareInfo = () => {
  return (
    <section className={classes.sectionFeatures}>
      <h4 className={`${classes.title} `}>
        Ouvert aux particuliers, aux professionnels de la boulangerie,
        pâtisserie, cuisine et de la restauration <br /> nous vous accompagnons
        depuis plus de 50 ans !
      </h4>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.featureBox}>
            <div className={classes.imgCorner}>
              <Image height={100} width={100} src={img1} />
            </div>
            <i className={`${classes.featureBox__icon} icon-basic-world`} />
            <h3
              className={`${classes.headingTertiary} ${classes.marginBottom1}`}
            >
              Boulangerie & Viennoiserie
            </h3>
            <p className={classes.featureBox__text}>
              {" "}
              Cuvelier vous propose toute une gamme complète d'ingredients de
              haute qualité ainsi que du matériel professionel pour tout
              artisants boulangers.
            </p>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.featureBox}>
            <div className={classes.imgCorner}>
              <Image height={90} width={90} src={img2} />
            </div>
            <i className={`${classes.featureBox__icon} icon-basic-compass`} />
            <h3
              className={`${classes.headingTertiary} ${classes.marginBottom1}`}
            >
              Pâtisserie
            </h3>
            <p className={classes.featureBox__text}>
              {" "}
              Des Arômes, des fruits, du chocolats et bien plus encore, pour
              aider nos clients a fabriquer ou a completer leurs pâtiseries
              grâce a un tres grand choix de matières premiere, de produits
              semi-fini ou plus élaboré.
            </p>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.featureBox}>
            <div className={classes.imgCorner}>
              <Image height={90} width={90} src={img3} />
            </div>
            <i className={`${classes.featureBox__icon} icon-basic-map`} />
            <h3
              className={`${classes.headingTertiary} ${classes.marginBottom1}`}
            >
              Restauration Snaking
            </h3>
            <p className={classes.featureBox__text}>
              {" "}
              Nous vous proposons des produits répondant à la demande du monde
              de la restauration (Aliments, sauce, emballages, conditionnements,
              articles de décoration...)
            </p>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.featureBox}>
            <div className={classes.imgCorner}>
              <Image height={100} width={100} src={img4} />
            </div>
            <i className={`${classes.featureBox__icon} icon-basic-heart`} />
            <h3
              className={`${classes.headingTertiary} ${classes.marginBottom1}`}
            >
              Matériel
            </h3>
            <p className={classes.featureBox__text}>
              {" "}
              Cuvelier c'est aussi un accompagnement en vous proposant toute une
              gamme de matériels adapter à tout professionnels des métiers de
              bouche, des vêtements de travail à la coutellerie .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForSquareInfo;
