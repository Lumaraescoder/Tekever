import "@testing-library/jest-dom";
import { findId } from "./helpers";

describe("Set id in the object", () => {

 it("should add id to the data", () => {

  const data = [
   {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
   },
  ];

  expect(findId(typeof data)?.toBe({
   id: 1,
   name: "bulbasaur",
   url: "https://pokeapi.co/api/v2/pokemon/1/",
  },));  

 });
});
