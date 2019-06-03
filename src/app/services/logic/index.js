export function check(cs) {
  const hold = []
  cs.forEach(c => {
    if (!c.c) {
      hold.push(c.e)
    }
  })
  return hold.shift()
}

export function order(co, ts) {
  if (co) {
    ts.map(t => {
      return t.id
    })
  }
}
