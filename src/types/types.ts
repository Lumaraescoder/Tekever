export type Pokemon = {
 sprites: any;
 amount: number;
 id?: number;
 name?: string;
 url?: string;
}

export type IPokemon = {
  url: string;
  results: Pokemon[];
}