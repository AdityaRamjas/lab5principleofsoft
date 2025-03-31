const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
  const input = [
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
    { id: 3, url: "https://www.link3.dev" }
  ];

  test("it should filter by a search term (uRl)", () => {
    const expected = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" }
    ];

    expect(filterByTerm(input, "uRl")).toEqual(expected);
  });

  test("it should throw an error when searchTerm is empty", () => {
    expect(() => {
      filterByTerm(input, "");
    }).toThrow("searchTerm cannot be empty");
  });
});
