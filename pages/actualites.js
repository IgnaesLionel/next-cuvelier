import React from "react";
import classes from "../styles/actualites.module.scss";
import Image from "next/image";
import Img1 from "../public/images/phare.jpg";

const actualites = () => {
  return (
    <div className={classes.actualites}>
      <h1 className="h1Style">Nos actualités</h1>

      <h3>Déménagement bientot ! </h3>
      <Image src={Img1} width={700} height={500}></Image>
    </div>
  );
};

export default actualites;
