function findFloor(arr, val) {
  if (val === 0) {
    return -1;
  }
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  if (arr[rightIdx] < val) {
    return arr[rightIdx];
  }
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal > val) {
      rightIdx = middleIdx - 1;
      if (arr[rightIdx] < val) {
        return arr[rightIdx];
      }
    } else if (middleVal < val) {
      leftIdx = middleIdx + 1;
    }
  }
}

module.exports = findFloor;
