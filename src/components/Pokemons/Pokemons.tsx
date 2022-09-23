import { Button } from "@material-ui/core";
import React from "react";
import { Pokemon } from "../../types/types";
import styles from "./css.module.css";

import Link from "next/link";

type Props = {
  item: Pokemon;
};

const Item: React.FC<Props> = ({ item }) => (
  <div className={styles.wrapper}>
    <img className={styles.img} />
    <div className={styles.div}>
      <h3 className={styles.title}>{item.name}</h3>
      <Link key={item.id} href={`/pokemons/${item.id}`}>
        <a className={styles.link}>Details</a>
      </Link>
    </div>
    <Button className={styles.button}>Add to Favorites</Button>
  </div>
);

export default Item;
