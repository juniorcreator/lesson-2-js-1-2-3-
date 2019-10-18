let a1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1];
let a2 = [-1, -8, -2];
let a3 = [1, 7, 3];
let a4 = [1, undefined, 3, 5, -3];
let a5 = [1, NaN, 3, 5, -3];
const arrCheck = (arr) =>  arr instanceof Array && !!arr.length;

const min = arr => {
  if (arrCheck(arr) !== false) {
    return arr.reduce((prev, current) => {
      if (isNaN(current) === false) {
        return prev < current ? prev : current;
      }
    });
  } else {
    return 'invalid array'
  }
};

const max = arr => {
  if (arrCheck(arr) !== false) {
    return arr.reduce((prev, current) => {
      if (isNaN(current) === false) {
        return current < prev ? prev : current;
      }
    });
  } else {
    return 'invalid array'
  }
};

const sum = arr => {
  if (arrCheck(arr) !== false) {
    const numberOrZero = n => isNaN(n) ? 0 : n;
    return arr.reduce((prev, current) => {
      return numberOrZero(prev) + numberOrZero(current);
    }, 0);
  } else {
    return 'invalid array'
  }
};

const minMaxSum = (arr) => {
  if (arrCheck(arr) !== false) {
    let results = {sum : 0, min: Infinity, max: -Infinity};
    arr.forEach((item) => {
      if (isNaN(item) === false) {
        results.sum += item;
        results.min = item < results.min ? item : results.min;
        results.max = item > results.max ? item : results.max;
      }
    });
    return results;
  } else return 'invalid array';
};