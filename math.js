export function add(a, b) {
  return a + b;
}

export function addError(a, b) {
  throw new Error("une erreur");
}

export function add2(a, b) {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  });
}

export function add3(a, b, cb) {
  return cb(a + b);
}
