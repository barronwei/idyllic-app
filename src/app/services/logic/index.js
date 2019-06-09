import { orderBy, partition } from 'lodash'
import moment from 'moment'

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
  const [xs, ys] = partition(ts, ts.shift)
  const oxs = orderBy(xs, ['prior'], ['desc'])
  oxs.forEach(ox => ({
    ...ox,
    ss: moment(ox.start),
    se: moment(ox.start).add(ox.time)
  }))
}
