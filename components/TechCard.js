import React from "react";

import styles from "../css/techCard.module.css";

function TechCard({ name }) {
  return (
    <div className={styles.mainTechCardContainer}>
      <di className={styles.individualCards}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {name}
        </div>
      </di>
    </div>
  );
}

export default TechCard;
