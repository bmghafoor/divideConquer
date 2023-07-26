function countZeroes(arr) {
  if (arr[arr.length - 1] !== 0) {
    return 0;
  }
  if (arr[0] === 0) {
    return arr.length;
  }
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let found = false;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
    console.log(middleIdx);
    if (arr[middleIdx] == 1 && arr[middleIdx + 1] == 0) {
      found = true;
      return arr.length - 1 - middleIdx;
    } else if (arr[middleIdx] == 1 && arr[middleIdx + 1] == 1) {
      leftIdx = middleIdx + 1;
    } else if (arr[middleIdx] == 0 && arr[middleIdx - 1] == 1) {
      found = true;
      return arr.length - middleIdx;
    } else if (arr[middleIdx] == 0 && arr[middleIdx - 1] == 0) {
      rightIdx = middleIdx - 1;
    }
  }
}

module.exports = countZeroes;
