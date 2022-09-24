import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import CardPokemon from "./PokemonCard";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

describe("CardPokemon", () => {
  it("renders a without crashing", () => {
    const component = render(
      <QueryClientProvider client={client}>
        <CardPokemon />
      </QueryClientProvider>
    );
    expect(component).toBeTruthy();
  });
});
