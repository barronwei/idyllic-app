import { Alert } from 'react-native'

export function check(cs) {
  cs.map(c => {
    if (c.c) {
      return c.e
    }
  })
}

export function place() {
  return []
}
