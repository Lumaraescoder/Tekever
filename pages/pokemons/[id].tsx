import React from "react";
import { useRouter } from "next/router";
import { Pokemon } from "../../src/types/types";

export const getPokemons = async (): Promise<Pokemon[]> => {
  return await (
    await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
  ).json();
};

 const Pokemon = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      <h1>{router.query.id}</h1>
    </div>
  );
};

export default Pokemon;