function reverseArray (array) {
  let reversedArray = []
  for (let element of array) {
    reversedArray.unshift(element)
  }
  return reversedArray
}

function reverseArrayInPlace (array) {
  let i = 0
  let j = array.length - 1
  let temp = 0
  while (i < j) {
    temp = array[j]
    array[i] = temp
    i += 1
    j -= 1
  }
}

function isEven (n) {
  return !(n & 1)
}
console.log(isEven(0))

console.log(reverseArray(['A', 'B', 'C']))
// → ["C", "B", "A"]

let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]
