import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

describe("Home", () => {
  const client = new QueryClient();

  it("renders a heading", () => {
    const component = render(
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    );
    expect(component).toBeTruthy();
  });
});
