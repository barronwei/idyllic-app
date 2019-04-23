import glamorous from 'glamorous-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

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
  height: hp('4%'),
  width: wp('80%'),
  borderColor: 'gray',
  borderWidth: 1,
  textAlign: 'center'
})
