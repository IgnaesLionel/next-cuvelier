import React from "react";
import classes from "./NavBtn.module.scss";
import { useRouter } from "next/router";

const NavBtn = ({ name, url }) => {
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return classes.activeBtn;
    } else {
      return null;
    }
  };

  return (
    <button className={`${classes.custom} ${classes.btn} ${isActive(url)}`}>
      {name}
    </button>
  );
};

export default NavBtn;
