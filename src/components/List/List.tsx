import React, { useEffect, useState } from "react";
import { Pokemon, IPokemon } from "../../types/types";
import { useQuery } from "react-query";
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";
import Item from "../Pokemons/Pokemons";
import { findId, getTotalItems } from "../../helpers/helpers";
import Favorites from "../Favorites/Favorites";
import { getPokemons } from "../../utils/utils";

// Fetching pokemon data from the API


// maping api data and add id for each pokemon object
function DataTable() {
  const [FavoriteOpen, setFavoriteOpen] = useState(false);
  const [FavoriteItems, setFavoriteItems] = useState([] as Pokemon[]);
  // Getting the data using React-query
  const { data } = useQuery<IPokemon>("id", getPokemons);
  // render  pokemons  in the cart

  const handleaddToFavorites = (clickedItem: Pokemon) => {
    setFavoriteItems((prev) => {
      //1. is item already added in the favorites?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      //First time item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  return (
    <div>
      <Drawer
        anchor="right"
        open={FavoriteOpen}
        onClose={() => setFavoriteOpen(false)}
      >
        <Favorites
          addToFavorites={handleaddToFavorites}
          FavoriteItems={FavoriteItems}
        />
      </Drawer>
      <button onClick={() => setFavoriteOpen(true)}>
        <Badge badgeContent={getTotalItems(FavoriteItems)}></Badge>
      </button>
      <Grid container spacing={3}>
        {findId(data)?.map((item: Pokemon) => {
          return (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleaddToFavorites={handleaddToFavorites} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
export default DataTable;
