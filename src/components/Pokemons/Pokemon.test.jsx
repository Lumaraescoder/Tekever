import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import  Item  from "./Pokemons";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

describe("List", () => {
  it("renders a without crashing", () => {
    const component = render(
      <QueryClientProvider client={client}>
        <Item />
      </QueryClientProvider>
    );
    expect(component).toBeTruthy();
  });
});
