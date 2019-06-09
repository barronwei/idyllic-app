import moment from 'moment'
import { record } from '../../config'

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

export function order(ts) {
  const { cap } = record
  const m = moment()
  const n = ts.filter(t => {
    moment(t.start).diff(m, 'hours') < cap
  })
  const [xs, ys] = split(n, 'shift')
}
