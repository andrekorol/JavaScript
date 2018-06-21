function deepEqual (value1, value2) {
  if ((typeof value1 === 'object' && value1 !== null) &&
      (typeof value2 === 'object' && value2 !== null)) {
    if (Object.keys(value1).length !== Object.keys(value2).length) {
      return false
    } else {
      if (Object.keys(value1).every(function (prop) {
        return value2.hasOwnProperty(prop)
      })) {
        return (Object.keys(value1).every(function (prop) {
          return deepEqual(value1[prop], value2[prop])
        }))
      }
    }
  } else {
    return (value1 === value2)
  }
}

let obj = {here: {is: 'an'}, object: 2}
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, {here: 1, object: 2}))
// → false
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}))
// → true
console.log(deepEqual(obj, {here: {is: 'an'}, object: 4}))
// → false
