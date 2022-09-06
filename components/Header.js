import React from "react";
import styles from "../css/header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoPosititoning}>
        <strong>LOGO</strong>
      </div>
    </div>
  );
}

export default Header;
