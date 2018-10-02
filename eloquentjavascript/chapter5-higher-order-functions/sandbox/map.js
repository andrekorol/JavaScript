function map (array, transform) {
  let mapped = []
  for (let element of array) {
    mapped.push(transform(element))
  }
  return mapped
}
var SCRIPTS = require('./scripts')

let rtlScripts = SCRIPTS.filter(s => s.direction === 'rtl')
console.log(map(rtlScripts, s => s.name))
