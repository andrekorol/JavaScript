function isEvenRecurrent (N) {
  if (N > 1) {
    return isEven(N - 2)
  } else {
    return (N === 0)
  }
}

function isEvenBitShift (N) {
  return !(N & 1)
}

function isOddBitShift (N) {
  return !!(N & 1)
}
