import styled from 'styled-components/native'


export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px;
`

export const Title = styled.Text`
font-size: 24px;
font-weight: bold;
`

export const ImageContainer = styled.View`
width: 100%;
background-color: #ddd;
margin-top: 10px;
  border-radius: 4px;
border: 2px solid #ccc;
overflow: hidden;
`

export const PickImage = styled.TouchableOpacity`
  padding: 8px 16px;
  margin-top: 10px;
  border-radius: 4px;
  background-color: #ddd;
`

export const PickImageText = styled.Text`
  color: #555;

`

export const Input = styled.TextInput`
  width: 100%;
  background-color: #ddd;
  margin-top: 20px;
  padding: 10px 16px;
  border-radius: 4px;
  height: 100px;
  text-align-vertical: top;
`

export const Submit = styled.TouchableOpacity`
  background-color: #ddd;
  padding: 8px 16px;
  margin-top: 10px;
  border-radius: 4px;
  width: 100%;

  &:disabled {
    opacity: 0.5;
  }

`

export const SubmitText = styled.Text`
  font-size: 16px;
  color: #555;
  text-align: center;
  font-weight: bold;
`
