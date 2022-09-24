import React from "react";
import styles from "./favorites.module.css";
import { Pokemon } from "../../types/types";
import ItemFavorites from '../Item/item';

type Props = {
  FavoriteItems: Pokemon[];
  addToFavorites: (clickedItem: Pokemon) => void;
};

const Favorites: React.FC<Props> = ({ FavoriteItems, addToFavorites }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Favorites</h2>
      {FavoriteItems?.length === 0 ? <p>No items in Favorites.</p> : null}
      {FavoriteItems?.map((item: Pokemon) => (
        <ItemFavorites key={item?.id} item={item} addToFavorites={addToFavorites} />
      ))}
    </div>
  );
};
export default Favorites;
