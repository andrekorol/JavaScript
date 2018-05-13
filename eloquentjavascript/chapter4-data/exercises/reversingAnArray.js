function reverseArray (array) {
  let reversedArray = []
  for (let element of array) {
    reversedArray.unshift(element)
  }
  return reversedArray
}

function reverseArrayInPlace (array) {
  let len = array.length
  let halflen = Math.floor(len / 2)
  for (let i = 0; i < halflen; i++) {
    let temp = array[i]
    array[i] = array[len - 1 - i]
    array[len - 1 - i] = temp
  }
}

console.log(reverseArray(['A', 'B', 'C']))
// → ["C", "B", "A"]

let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]
