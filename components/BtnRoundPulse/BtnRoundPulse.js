import React from "react";
import classes from "./BtnRoundPulse.module.scss";
import Link from "next/link";

const BtnPulse = ({ text, color, path }) => {
  let selectedColor = "";

  if (color == "white") {
    selectedColor = classes.btn__white;
  }

  if (color == "green") {
    selectedColor = classes.btn__green;
  }
  console.log(path);
  return (
    <Link href="/produits">
      <a className={`${classes.btn} ${selectedColor} ${classes.btn__animated}`}>
        {text}
      </a>
    </Link>
  );
};

export default BtnPulse;
