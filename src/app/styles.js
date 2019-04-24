import styled from 'styled-components'
import { wp, hp } from './services/visual'

export const Holds = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFFFFF'
})

export const Title = styled.Text({
  fontSize: 20,
  margin: 10,
  textAlign: 'center'
})

export const Words = styled.Text({
  margin: 10,
  textAlign: 'center'
})

export const Input = styled.TextInput({
  margin: 15,
  width: wp('80%'),
  height: hp('4%'),
  borderColor: 'gray',
  borderWidth: 1,
  textAlign: 'center'
})
