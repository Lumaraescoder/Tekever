import { Button } from "@material-ui/core";
import React from "react";
import { Pokemon } from "../../types/types";
import styles from "./css.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

type Props = {
  item: Pokemon;
  handleaddToFavorites: (clickedItem: Pokemon) => void;
};

export const Item: React.FC<Props> = ({ item, handleaddToFavorites }) => (
  <div className={styles.wrapper}>
    <Link key={item?.id} href={`/pokemons/${item?.id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={item?.sprites?.front_default}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Details
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
    <Button
      className={styles.button}
      onClick={() => handleaddToFavorites(item)}
    >
      Add to Favorites
    </Button>
  </div>
);

export default Item;
