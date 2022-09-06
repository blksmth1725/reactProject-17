import React from "react";

import Introduction from "../components/Introduction";
import Technologies from "../components/Technologies";

import styles from "../css/myApp.module.css";

function MyApp() {
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.mainSectionsContainer}>
        <Introduction />
        <Technologies />
      </div>
    </div>
  );
}

export default MyApp;
