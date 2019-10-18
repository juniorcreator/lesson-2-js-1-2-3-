let testArr1 = [2, 1, 5, 0 , 3, 4, 7, 2, 3, 1, 0];

const waterInMount = (arr) => {
  let len = arr.length;
  if (!len) return 0;
  let total = 0;
  let fromLeft = 0;
  let fromRight = len - 1;
  let maxLeft = 0;
  let maxRight = 0;
  while (fromLeft <= fromRight) {
    if (arr[fromLeft] <= arr[fromRight]) {
      if (arr[fromLeft] >= maxLeft) maxLeft = arr[fromLeft];
      else total += maxLeft - arr[fromLeft];
      fromLeft++;
    } else {
      if (arr[fromRight] >= maxRight) maxRight = arr[fromRight];
      else total += maxRight - arr[fromRight];
      fromRight--;
    }
  }
  return total;
};