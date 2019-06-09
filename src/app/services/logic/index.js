import moment from 'moment'
import { filter, first, orderBy, partition } from 'lodash'
import { record } from '../../config'

export function check(cs) {
  const hold = []
  cs.forEach(c => {
    if (!c.c) {
      hold.push(c.e)
    }
  })
  return first(hold)
}

export function order(ts) {
  const { cap } = record
  const m = moment()
  const n = filter(ts, t => {
    moment(t.start).diff(m, 'days') < cap
  })
  const o = orderBy(n, ['prior', 'power'], ['desc', 'desc'])
  const [xs, ys] = partition(o, o.shift)
}
