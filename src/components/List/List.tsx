import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Pokemon, IPokemon } from '../../types/types';
import { useQuery } from "react-query";
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";
import Item from "../Pokemons/Pokemons";

// Fetching pokemon data from the API
export const getPokemons = async (): Promise<IPokemon> => {
  return await (
    await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
  ).json();
};

// mapping api data and add id for each pokemon object
function findId(data: IPokemon | undefined) {
  const pokemonid = data?.results.map((item: Pokemon, index: number) => ({
    ...item,
    id: index + 1,
  })) as Pokemon[];
  return pokemonid;
}

export default function DataTable() {
  // Getting the data using React-query
  const { data } = useQuery<IPokemon>("id", getPokemons);
  
  return (
    <div>
      <Grid container spacing={3}>
        {findId(data).map((item: Pokemon) => {
          return (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
