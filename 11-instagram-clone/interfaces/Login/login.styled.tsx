import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px;
  justify-content: center;
  gap: 16px;
`

export const Input = styled.TextInput`
  width: 100%;
  padding: 4px 12px;
  border: 1px solid #ddd;
`

export const Button = styled.TouchableOpacity`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #ddd;
  width: 100%;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #555;
  text-align: center;
`
