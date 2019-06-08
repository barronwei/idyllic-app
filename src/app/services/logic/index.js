export function check(cs) {
  const hold = []
  cs.forEach(c => {
    if (!c.c) {
      hold.push(c.e)
    }
  })
  return hold.shift()
}

export function split(co, pr) {
  return co.reduce((r, v) => (r[pr(v) ? 0 : 1].push(v), r), [[], []])
}

export function order(co, ts) {
  if (!co) {
    ts.reduce(t => {
      t.shift
    })
  }
}
