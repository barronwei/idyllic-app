import styled from 'styled-components/native'
import { hp, wp } from './services/visual'

export const Holds = styled.SafeAreaView({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
})

export const Lists = styled.SafeAreaView({
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#FFFFFF'
})

export const Notes = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 10,
  height: hp(20),
  width: wp(60)
})

export const Event = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 4,
  backgroundColor: '#FFFFFF',
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 10,
  shadowOpacity: 0.4,
  shadowRadius: 4,
  shadowColor: 'gray',
  height: hp(10),
  width: wp(90),
  margin: hp(1)
})

export const Panel = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 4,
  backgroundColor: '#FFFFFF',
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 10,
  shadowOpacity: 0.4,
  shadowRadius: 4,
  shadowColor: 'gray',
  height: hp(10),
  width: wp(30),
  margin: hp(1)
})

export const Title = styled.Text({
  fontSize: 20,
  margin: 10
})

export const Words = styled.Text({
  margin: 5
})

export const Input = styled.TextInput({
  margin: 10,
  borderColor: 'gray',
  borderWidth: 1,
  height: hp(4),
  width: wp(80)
})
