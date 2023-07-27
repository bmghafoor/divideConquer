function findRotatedIndex(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    // edge case for if it's first idx
    if (arr[leftIdx] === val) {
      return leftIdx;
    }
    // edge case for if its last val
    if (arr[rightIdx] === val) {
      return rightIdx;
    }
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal === val) {
      return middleIdx;
    } else if (middleVal !== val) {
      leftIdx += 1;
      rightIdx -= 1;
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
