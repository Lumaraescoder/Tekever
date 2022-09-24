import { IPokemon, Pokemon } from "../types/types";

export function findId(data: IPokemon | undefined) {
 const pokemonid = data?.results?.map((item: Pokemon, index: number) => ({
   ...item,
   id: index + 1,
 })) as Pokemon[];
 return pokemonid;
}

export const getTotalItems = (items: Pokemon[]) =>
items.reduce((ack: number, item) => ack + item.amount, 0);
