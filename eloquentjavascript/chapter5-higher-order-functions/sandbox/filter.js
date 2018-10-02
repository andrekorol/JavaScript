function filter (array, test) {
  let passed = []
  for (let element of array) {
    if (test(element)) {
      passed.push(element)
    }
  }
  return passed
}

var SCRIPTS = require('./scripts')

console.log(filter(SCRIPTS, script => script.living))
