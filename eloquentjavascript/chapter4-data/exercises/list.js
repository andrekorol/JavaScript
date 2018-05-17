function arrayToList (array) {
  let head = null
  let p = {}
  for (let element of array) {
    let temp = {value: element, rest: null}
    if (head == null) {
      head = temp
    } else {
      p = head
      while (p['rest'] != null) {
        p = p['rest']
      }
      p['rest'] = temp
    }
  }
  return head
}

// function listToArray (list) {
//   let array = []
//   for (let element of list) {
//     console.log(element)
//   }
// }

let lista = arrayToList([1, 2, 3])
for (let property in lista) {
  if ()
}
// console.log(arrayToList([10, 20]))
// console.log(arrayToList([1, 2, 3]))
// console.log(listToArray(arrayToList([1, 2, 3])))
