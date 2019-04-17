import glamorous from 'glamorous-native'

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
