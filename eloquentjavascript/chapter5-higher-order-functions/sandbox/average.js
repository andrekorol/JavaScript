function average (array) {
  return array.reduce((a, b) => a + b) / array.length
}

var SCRIPTS = require('./scripts.js')

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))))

console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))))

let total = 0
let count = 0
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year
    count += 1
  }
}
console.log(Math.round(total / count))
