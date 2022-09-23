import { Pokemon } from "../types/types";

export async function getInfo(id: any) {
 const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
 const res = await response.json();
 const url = res.sprites.front_default;
 const pokeName = res.name;
 const abilities = await res.abilities[0].ability;
 const nameAbility = abilities.name;
 const urlAbility = abilities.url;
 const resEffect = await getAbilities(urlAbility, id);
 const effect = resEffect.effect;
 const shortEffect = resEffect.shortEffect;

 return {
  url,
  pokeName,
  nameAbility,
  effect,
  shortEffect,
 };
}

export async function getAbilities(url: string, id: any) {
 const response = await fetch(url);
 const res = await response.json();
 const effect_entries = id > 3 ? res.effect_entries[1] : res.effect_entries[0];
 const effect = effect_entries.effect;
 const shortEffect = effect_entries.short_effect;

 return { effect, shortEffect };
}

export const getTotalItems = (items: Pokemon[]) =>
 items.reduce((ack: number, item) => ack + item.amount, 0);
