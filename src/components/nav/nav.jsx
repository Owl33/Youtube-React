import React, { useRef } from "react";
import styles from "./nav.module.css";

const Navbar = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSerach = () => {
    const value = inputRef.current.value;
    onSearch(value);
    console.log(value);
  };
  const onClick = () => {
    handleSerach();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSerach();
    }
  };
  const formevent = (event) => {
    event.preventDefault();
  };
  return (
    <header>
      <nav className={styles.Navbar}>
        <div className={styles.logo}>
          <img src="./images/logo.png"></img>
          <h1>Youtube</h1>
        </div>
        <form className={styles.searchForm} onSubmit={formevent}>
          <input
            ref={inputRef}
            className={styles.input}
            type="search"
            placeholder="Search"
            onKeyPress={onKeyPress}
          ></input>
          <button type="submit" onClick={onClick}>
            <img className={styles.searchImg} src="./images/search.png"></img>
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Navbar;
