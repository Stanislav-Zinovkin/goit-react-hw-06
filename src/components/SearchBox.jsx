import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
      <p className={styles.descr}>Search contact by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
