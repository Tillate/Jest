import { add, addError } from "./math";

// test("1 + 1 should be 2", () => {
//   expect(add(1, 1)).toBe(2);
// });

//ONLY ----------------------------------
//Tester uniquement ce test
// test.only("1 + 1 should be 2", () => {
//   expect(add(1, 1)).toBe(2);
// });

//SKIP ----------------------------------
// Sauter ce test
// test.skip("1 + 1 should be 2", () => {
//   expect(add(1, 1)).toBe(2);
// });

//EACH ----------------------------------
// Effectuer le meme test avec plusieurs valeurs
// test.each([
//   [1, 1, 2],
//   [1, 2, 3],
//   [3, 2, 5],
// ])("addition should work", (a, b, c) => {
//   expect(add(a, b)).toBe(c);
// });

//DESCRIBE ----------------------------------
// Permet de créer des blocs de test
// describe("working use case", () => {
//   const firstNumber = 1;

//   test("1 + 1 should be 2", () => {
//     expect(add(firstNumber, 1)).toBe(2);
//   });

//   test("1 + 2 should be 3", () => {
//     expect(add(firstNumber, 2)).toBe(3);
//   });
// });

// Todo ----------------------------------
// test.todo('write a test with a failing number');

// EXPECT ----------------------------------
// toBe tester un nombre ou un boolean
// toEqual pour tester un objet
test("1 + 1 should be 2", () => {
  const obj = { key: 1 };
  expect(obj).toEqual({
    key: 1,
  });
});

// test("1 + 1 should be 2", () => {
//   expect(undefined).toBe(false);
// });

//toBeTruthy ou toBeFalsy
// test("1 + 1 should be 2", () => {
//   expect(true).toBeTruthy();
// });

// test("1 + 1 should be 2", () => {
//   expect(false).toBeFalsy();
// });

// toMatch  ----------------------------------
test("1 + 1 should be 2", () => {
  const str = "jean";
  expect(str).toMatch(/ea/);
});

// Tableau
// tocontain
test("1 + 1 should be 2", () => {
  const arr = [1, 2];
  expect(arr).toContain(1);
});

// Error
// toThrow
test("1 + 1 should be 2", () => {
  expect(addError).toThrow();
});

