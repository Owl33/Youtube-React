import React from "react";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ display }) => {
  const displayType = display === "main" ? styles.main : styles.detail;

  return (
    <div className={`${styles.sideBar} ${displayType}`}>
      <a>
        <FontAwesomeIcon className={styles.fontAwesomeimg} icon={faHouse} />
        <span>Home</span>
      </a>
      <a>
        <FontAwesomeIcon
          className={styles.fontAwesomeimg}
          icon={faFireFlameCurved}
        />
        <span>Popular</span>
      </a>
    </div>
  );
};
export default Sidebar;
