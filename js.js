// let a1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1];
// let a2 = [-1, -8, -2];
// let a3 = [1, 7, 3];
// let a4 = [1, undefined, 3, 5, -3];
// let a5 = [1, NaN, 3, 5, -3];
// const arrCheck = (arr) =>  arr instanceof Array && !!arr.length;
//
// // ### task 1
//
// const min = arr => {
//   if (arrCheck(arr) !== false) {
//     return arr.reduce((prev, current) => {
//       if (isNaN(current) === false) {
//         return prev < current ? prev : current;
//       }
//     });
//   } else {
//     return 'invalid array'
//   }
// };
//
// const max = arr => {
//   if (arrCheck(arr) !== false) {
//     return arr.reduce((prev, current) => {
//       if (isNaN(current) === false) {
//         return current < prev ? prev : current;
//       }
//     });
//   } else {
//     return 'invalid array'
//   }
// };
//
// const sum = arr => {
//   if (arrCheck(arr) !== false) {
//     const numberOrZero = n => isNaN(n) ? 0 : n;
//      return arr.reduce((prev, current) => {
//         return numberOrZero(prev) + numberOrZero(current);
//     }, 0);
//   } else {
//     return 'invalid array'
//   }
// };
//
// const minMaxSum = (arr) => {
//   if (arrCheck(arr) !== false) {
//     let results = {sum : 0, min: Infinity, max: -Infinity};
//     arr.forEach((item) => {
//       if (isNaN(item) === false) {
//         results.sum += item;
//         results.min = item < results.min ? item : results.min;
//         results.max = item > results.max ? item : results.max;
//       }
//     });
//     return results;
//   } else return 'invalid array';
// };
//
// // ### task 2
//
// let testArr1 = [2, 1, 5, 0 , 3, 4, 7, 2, 3, 1, 0];
//
// const waterInMount = (arr) => {
//   let len = arr.length;
//   if (!len) return 0;
//   let total = 0;
//   let fromLeft = 0;
//   let fromRight = len - 1;
//   let maxLeft = 0;
//   let maxRight = 0;
//   while (fromLeft <= fromRight) {
//     if (arr[fromLeft] <= arr[fromRight]) {
//       if (arr[fromLeft] >= maxLeft) maxLeft = arr[fromLeft];
//       else total += maxLeft - arr[fromLeft];
//       fromLeft++;
//     } else {
//       if (arr[fromRight] >= maxRight) maxRight = arr[fromRight];
//       else total += maxRight - arr[fromRight];
//       fromRight--;
//     }
//   }
//   return total;
// };
// console.log(waterInMount(testArr1), ' testArr1');
// ## task 3
console.log('wdwdwed');

// const banknotes = [1, 2, 5, 10, 20, 50, 100, 200, 500].reverse();
// ​
// const priceInput = 888;
// ​
// const getBanknotes = (price, banknotesResult) => {
//   for (const banknote of banknotes) {
//     if (parseInt(price / banknote) > 0) {
//       banknotesResult.push(banknote);
//       return getBanknotes(price - banknote, banknotesResult);
//     }
//   }
//     return banknotesResult;
// };
​
// console.log(getBanknotes(priceInput, []));
// const currency = [1, 2, 5, 10, 20, 50, 100];
//
// const _getChange = (amountInCents, currency, result) => {
//   if ( amountInCents < 0 || currency.length === 0) {
//     return []
//   } else if (amountInCents == 0) {
//     return result
//   } else {
//     newArr = result.map(e => [...e, currency[0]]);
//     return _getChange(amountInCents - currency[0], currency, newArr).concat(_getChange(amountInCents, currency.slice(1), result))
//   }
// };
//
// const getChange = (amountInCents, currency) => {
//   return _getChange(amountInCents, currency, [[]])
// };
//
// console.log(getChange(4, currency).length);



