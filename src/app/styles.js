import styled from 'styled-components'
import { wp, hp } from './services/visual'

export const Holds = styled.SafeAreaView({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFFFFF'
})

export const Mains = styled.SafeAreaView({
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#FFFFFF'
})

export const Event = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 4,
  backgroundColor: '#FFFFFF',
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 10,
  shadowOpacity: 0.4,
  shadowRadius: 4,
  shadowColor: 'gray',
  width: wp(90),
  height: hp(10),
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
  width: wp(80),
  height: hp(4)
})
