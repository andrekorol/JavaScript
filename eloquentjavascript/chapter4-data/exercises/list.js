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

function listToArray (list) {
  let array = []
  let restOfList = list
  while (restOfList !== null) {
    for (let key in restOfList) {
      if (key === 'value') {
        array.push(restOfList[key])
      } else if (key === 'rest') {
        restOfList = restOfList[key]
      }
    }
  }
  return array
}

function prepend (element, list) {
  let array = listToArray(list)
  array.unshift(element)
  return arrayToList(array)
}

function nth (list, number) {
  let array = listToArray(list)
  return array[number]
}

function recursiveNth (list, number) {
  if (number === 0) {
    return list.value
  } else {
    return recursiveNth(list.rest, number - 1)
  }
}

console.log(arrayToList([10, 20]))
console.log(listToArray(arrayToList([10, 20, 30])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1))
console.log(recursiveNth(arrayToList([10, 20, 30]), 1))
