import React from "react";
import classes from "../styles/moyens.module.scss";
import Img1 from "../public/images/back.jpg";
import Image from "next/image";

const moyens = () => {
  return (
    <div className={classes.moyens}>
      <h1 className="h1Style">Nos moyens</h1>

      <div className={classes.wrapper}>
        <p className={classes.one}>
          Nos entrepôts, 29000 m3 de stockage ambiant, 11 000 m3 de stockage
          -18°C et 3300 m3 de stockage +4°C nous permettent de vous proposer
          plus de 8000 références. Equipe commerciale : expérience et
          professionnalisme. Notre équipe se compose de 18 commerciaux et d’un
          commercial spécialisé dans les emballages personnalisés.
        </p>
        <div className={classes.two}>
          <Image src={Img1} width={700} height={500}></Image>
        </div>
        <div className={classes.three}>
          <Image src={Img1} width={700} height={500}></Image>
        </div>

        <p className={classes.four}>
          Tous nos commerciaux sont équipés d’ordinateur portable et pourront
          ainsi vous informer des meilleurs prix, de la disponibilité sur stock
          et des délais de certains articles sur commande, ceci instantanément.
          Télévente : accueil et écoute.
        </p>

        <p className={classes.five}>
          Un service pour répondre à vos attentes et vous orienter vers les
          personnes susceptibles de répondre à vos interrogations. Notre magasin
          de plus de 700 m² vous propose une très large gamme de produits :
          matériel, petit matériel, sujets de mariage, baptême, kits décors,
          vêtements professionnels
        </p>
        <div className={classes.six}>
          <Image src={Img1} width={700} height={500}></Image>
        </div>

        <div className={classes.seven}>
          <Image src={Img1} width={700} height={500}></Image>
        </div>
        <p className={classes.eight}>
          . Une équipe de 3 conseillers vous accueille et vous aide du lundi au
          vendredi de 8h à 12h et de 14h à 18h. Local de démonstration : en
          partenariat avec nos fournisseurs, une salle entièrement équipée
          permet de vous recevoir pour des démonstrations de qualité dirigées
          par des Meilleurs Ouvriers de France.
        </p>
      </div>
    </div>
  );
};

export default moyens;
