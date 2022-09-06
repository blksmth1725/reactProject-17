import React from "react";
import styles from "../css/footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footerContainer}>
        <div>About US</div>
        <div>
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#"> About </a>
          </li>
          <li>
            <a href="#"> Career </a>
          </li>
          <li>
            <a href="#"> Contact US </a>
          </li>
          <li>
            <a href="#"> Visit Here </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
