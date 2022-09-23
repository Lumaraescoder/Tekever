import React from "react";
import { Pokemon } from "../../types/types";
import styles from "./item.module.css";
type Props = {
  item: Pokemon;
  addToFavorites: (clickedItem: Pokemon) => void;
};

const ItemFavorites: React.FC<Props> = ({ item, addToFavorites }) => {
  return (
    <div className={styles.wrapper}>
      <div>
      <h3>{item?.name}</h3>
      <div className={styles.information}>
      </div>
      <div className="buttons">
        <button
          className={styles.buttons}
          onClick={() => addToFavorites(item)}
        > + </button>
      </div>
    </div>
    </div>
  );
};
export default ItemFavorites;
