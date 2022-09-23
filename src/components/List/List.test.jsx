import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import List from "./List";
import findId from "./List";
import { QueryClient, QueryClientProvider } from "react-query";




const client = new QueryClient();

describe("List", () => {
  it("renders a without crashing", () => {
    const component = render(
      <QueryClientProvider client={client}>
        <List />
      </QueryClientProvider>
    );
    expect(component).toBeTruthy();
  });

});
