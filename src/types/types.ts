export type Pokemon = {
 amount: number;
 id?: number;
 name?: string;
 url?: string;
}

export type IPokemon = {
  results: Pokemon[];
}