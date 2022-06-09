import { add } from "./math";

// Préparation et nettoyage
beforeAll(() => {
  return new Promis((resolve) =>
    setTimeout(() => {
      console.log("here");
      resolve("ok");
    }, 3000)
  );
});

afterAll(() => {
  console.log("after All");
});

afterEach(() => {
  console.log("after Each");
});

describe("set 1", () => {
  beforeEach(() => {
    console.log("before each");
  });
  test("should be 2", () => {
    console.log("test 1");
    expect(add(1, 1)).toBe(2);
  });
});

test("should be 3", () => {
  console.log("test 2");
  expect(add(1, 2)).toBe(3);
});

// Fonction Mock