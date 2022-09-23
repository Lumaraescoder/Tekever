import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Favorites from './Favorites';


const client = new QueryClient();

describe("Favorites", () => {
  it("renders a without crashing", () => {
    const component = render(
      <QueryClientProvider client={client}>
        <Favorites />
      </QueryClientProvider>
    );
    expect(component).toBeTruthy();
  });


});
