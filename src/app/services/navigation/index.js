import { NavigationActions } from 'react-navigation'

let _n

export function set(ref) {
  _n = ref
}

export function navigate(routeName, params) {
  _n.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}
