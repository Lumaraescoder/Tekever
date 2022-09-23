import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Item from './Item';


const client = new QueryClient();

describe("Item", () => {
  it("renders a without crashing", () => {
    const component = render(
      <QueryClientProvider client={client}>
        <Item />
      </QueryClientProvider>
    );
    expect(component).toBeTruthy();
  });


});
