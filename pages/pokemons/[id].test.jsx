import { render, screen } from "@testing-library/react";
import  Pokemon  from "./[id]";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "react-query";

describe("Pokemon", () => {
  const client = new QueryClient();

  it("renders a heading", () => {
    const component = render(
      <QueryClientProvider client={client}>
        <wwwwa />
      </QueryClientProvider>
    );
    expect(component).toBeTruthy();
  });
});
