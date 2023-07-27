function findRotationCount(arr) {
  if (arr[arr.length - 1] > arr[0]) {
    return 0;
  }

  let leftIdx = 0;
  let rightIdx = arr.length - 2;
  let lastVal = arr[arr.length - 1];
  if (lastVal < arr[rightIdx]) {
    return arr.length - 1;
  }
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (lastVal > middleVal) {
      console.log("case 1");
      rightIdx = middleIdx - 1;
    } else if (lastVal < middleVal) {
      console.log("case 2");
      if (arr[middleIdx + 1] < lastVal) {
        return middleIdx + 1;
      }
      leftIdx = middleIdx + 1;
      if (middleIdx === 0) {
        return rightIdx + 1;
      }
    } else if (lastVal < middleVal && lastVal < arr[middleIdx - 1]) {
      console.log("case 3");
      return middleIdx;
    }
  }
}

module.exports = findRotationCount;
