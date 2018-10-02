function characterCount (script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from)
  }, 0)
}

var SCRIPTS = require('./scripts.js')

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a
}))

let biggest = null
for (let script of SCRIPTS) {
  if (biggest === null || characterCount(biggest) < characterCount(script)) {
    biggest = script
  }
}
console.log(biggest)
