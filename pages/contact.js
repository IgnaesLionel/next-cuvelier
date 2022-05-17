import React from "react";
import ContactByMail from "../components/ContactByMail/ContactByMail";
import classes from "../styles/contact.module.scss";

const contact = () => {
  return (
    <div className={classes.contact}>
      <h1 className="h1Style">Contactez-nous</h1>

      <h4 style={{ color: "white" }}>
        Établissements Cuvelier 11 Rue des Corderies, <br /> Dunkerque, 59240,
        France
        <br /> Tél : Fax : 03 28 63 58 01 <br />
        03 28 65 01 60
        <br />
        http://www.cuveliersas.com/
      </h4>
      <ContactByMail />
    </div>
  );
};

export default contact;
