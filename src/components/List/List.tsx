import React, { useState } from "react";
import { Pokemon, IPokemon } from "../../types/types";
import { useQuery } from "react-query";
import { Drawer, Grid, Badge, LinearProgress } from "@material-ui/core";
import Item from "../Pokemons/Pokemons";
import Favorites from "../Favorites/Favorites";
import { getTotalItems } from "../../helpers/helpers";

export const FetchingData = () => {
  const [pokemonInfo, setPokemonInfo] = useState([] as Pokemon[]);

  // Getting the data using React-query
  const { isLoading, error } = useQuery("pokemon", () => {
    const pokemonData = fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=1"
    )
      .then((res) => res.json())
      .then((response) => fetchPokemonData(response.results));
    return pokemonData;
  });

  // render  pokemons  in the Favorites
  const fetchPokemonData = (response: IPokemon[]) => {
    response.map((dataPokemon) => {
      fetch(dataPokemon.url)
        .then((res) => res.json())
        .then((res) => setPokemonInfo((pre) => [...pre, res]));
    });
  };

  return {
    fetchPokemonData,
    isLoading,
    error,
    pokemonInfo,
  };
};
const AddToFavorites = () => {
  const [favoriteItems, setFavoriteItems] = useState([] as Pokemon[]);
  const [favoriteOpen, setFavoriteOpen] = useState(false);

  const handleaddToFavorites = (clickedItem: Pokemon) => {
    setFavoriteItems((prev) => {
      //1. is item already added in the favorites?
      const isItemInFavorite = prev.find((item) => item.id === clickedItem.id);
      if (isItemInFavorite) {
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
  return { favoriteOpen, favoriteItems, setFavoriteOpen, handleaddToFavorites }
}
const DataTable: React.FC = () => {
  const { pokemonInfo, fetchPokemonData, isLoading, error, } = FetchingData();
  const { favoriteOpen, favoriteItems, setFavoriteOpen, handleaddToFavorites } = AddToFavorites();
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;
  return (
    <div>
      <Drawer
        anchor="right"
        open={favoriteOpen}
        onClose={() => setFavoriteOpen(false)}
      >
        <Favorites
          addToFavorites={handleaddToFavorites}
          FavoriteItems={favoriteItems}
        />
      </Drawer>
      Favorites
      <button onClick={() => setFavoriteOpen(true)}>
        <Badge badgeContent={getTotalItems(favoriteItems)}></Badge>
      </button>
      <Grid container spacing={3}>
        {pokemonInfo.map((item: Pokemon) => {
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
