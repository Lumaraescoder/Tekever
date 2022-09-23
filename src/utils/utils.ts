import { IPokemon } from "../types/types";

export const getPokemons = async (): Promise<IPokemon> => {
 return await (
  await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
 ).json();
};