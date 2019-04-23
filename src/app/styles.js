import glamorous from 'glamorous-native'
import { wp, hp } from './services/visual'

export const Container = glamorous.view({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFFFFF'
})

export const Title = glamorous.text({
  fontSize: 20,
  margin: 10,
  textAlign: 'center'
})

export const Words = glamorous.text({
  margin: 10,
  textAlign: 'center'
})

export const Input = glamorous.textInput({
  margin: 15,
  width: wp('80%'),
  height: hp('4%'),
  borderColor: 'gray',
  borderWidth: 1,
  textAlign: 'center'
})
