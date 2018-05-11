function range (start, end, step = 1) {
  let array = []
  if (start <= end) {
    for (let i = start; i <= end; i += step) {
      array.push(i)
    }
  } else {
    if (step === 1) {
      step = -1
    }
    for (let i = start; i >= end; i += step) {
      array.push(i)
    }
  }
  return array
}

function sum (array) {
  let result = 0
  for (let num of array) {
    result += num
  }
  return result
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1))
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)))
// → 55
