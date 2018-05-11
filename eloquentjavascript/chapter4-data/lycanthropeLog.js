let journal = []

function addEntry (events, squirrel) {
  journal.push({events, squirrel})
}

function phi ([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
  Math.sqrt((n10 + n11) *
            (n00 + n01) *
            (n01 + n11) *
            (n00 + n10))
}

require('./journal')

function tableFor (event, journal) {
  let table = [0, 0, 0, 0]
  for (let entry of journal) {
    let index = 0
    if (entry.events.includes(event)) index += 1
    if (entry.squirrel) index += 2
    table[index] += 1
  }
  return table
}

function journalEvents(journal) {
  let events = []
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event)
      }
    }
  }
  return events
}

console.log(tableFor('pizza', JOURNAL))
console.log(journalEvents(JOURNAL))

// for (let event of journalEvents(JOURNAL)) {
//   console.log(event + ':', phi(tableFor(event, JOURNAL)))
// }

// for (let event of journalEvents(JOURNAL)) {
//   let correlation = phi(tableFor(event, JOURNAL))
//   if (correlation > 0.1 || correlation < -0.1) {
//     console.log(event + ':', correlation)
//   }
// }

for (let entry of JOURNAL) {
  if (entry.events.includes('peanuts') && !entry.events.includes('brushed teeth')) {
    entry.events.push('peanut teeth')
  }
}
console.log(phi(tableFor('peanut teeth', JOURNAL)))

let string = JSON.stringify({squirrel: false, events: ['weekend']})
console.log(string)
console.log(JSON.parse(string).events)
