import React, { memo, useRef } from "react";
import styles from "./nav.module.css";
import logo from "../../img/logo.png";
import search from "../../img/search.png";

const Navbar = memo(({ onSearch, clickLogo }) => {
  const inputRef = useRef();
  const handleSerach = () => {
    const value = inputRef.current.value;
    onSearch(value);
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
  const onClickLogo = () => {
    clickLogo();
  };

  return (
    <header>
      <div className={styles.logo} onClick={onClickLogo}>
        <img src={logo} alt="logo"></img>
        <h1>Youtube</h1>
      </div>
      <nav className={styles.Navbar}>
        <form className={styles.searchForm} onSubmit={formevent}>
          <input
            ref={inputRef}
            className={styles.input}
            type="search"
            placeholder="Search"
            onKeyPress={onKeyPress}
          ></input>
          <button type="submit" onClick={onClick}>
            <img className={styles.searchImg} src={search} alt="search"></img>
          </button>
        </form>
      </nav>
    </header>
  );
});

export default Navbar;
