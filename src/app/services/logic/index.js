import { Alert } from 'react-native'

export function check(cs) {
  cs.map(c => {
    if (c.c) {
      Alert.alert(c.e)
      return
    }
  })
}

export function place() {
  return []
}
