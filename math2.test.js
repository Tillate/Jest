import { add, add3 } from "./math";

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
test("should call function", () => {
  const func = jest.fn(() => 42);
  func.mockReturnValueOnce(30);
  func.mockImplementation(() => {
    return 42;
  });

  func();

  expect(func.mock.results[0].value).toBe(42);

  func.mockResolvedValue(3);

  func();
  return expect(func.mock.results[1].value).resolves.toBe(3);

  // expect(func.mock.results);
  // func("foo", "bar");

  // console.log(func.mock.calls[0][1]);
  // console.log(func.mock.results[0].value);
});

test("should call function", () => {
  const func = jest.fn();

  add3(1, 1, func);

  expect(funck.mock.calls.length).toBe(1);
  expect(funck.mock.calls[0][0]).toBe(2);
});
