import moment from 'moment'
import { record } from '../../config'

export function check(cs) {
  const a = []
  cs.forEach(c => {
    if (!c.c) {
      a.push(c.e)
    }
  })
  return a.shift()
}

function split(co, fn) {
  return co.reduce((r, v) => (r[fn(v) ? 0 : 1].push(v), r), [[], []])
}

function reset(xs) {
  return xs
}

function basic(xs, ys) {
  if (xs.length > 0) {
    const x = xs.shift()
    ys.every((y, i) => {
      const p = i ? ys[i - 1].end : moment()
      if (x.start.isBetween(p, y) && p.diff(y) > x.time) {
        ys.splice(i, { ...x, ss: p, se: p.add(x.time, 'h') })
        return true
      } else {
        return false
      }
    })
    return ys
  } else {
    return ys
  }
}

export function order(ts) {
  const cap = 7
  const m = ts.filter(t => moment(t.start).isBefore(moment().add(cap, 'd')))
  const o = m.map(n => ({ ...n, start: moment(n.start), end: moment(n.end) }))
  const [xs, ys] = split(o, p => p.shift)
  xs.sort((a, b) => b.prior - a.prior)
  ys.sort((a, b) => a.start.diff(b.start, 's'))
  return basic(xs, ys.map(y => ({ ...y, ss: y.start, se: y.end })))
}
