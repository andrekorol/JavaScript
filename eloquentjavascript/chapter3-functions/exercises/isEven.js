function isEven (N) {
  if (N > 1) {
    return isEven(N - 2)
  } else {
    return (N === 0)
  }
}
