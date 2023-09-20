import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px;

`

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-top: 100px;
`

export const Name = styled.Text`
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;

`

export const Email = styled.Text`
  margin-top: 20px;
  font-size: 20px;
`

export const LogOut = styled.TouchableOpacity`
 margin-top: 30px;
 padding: 8px 16px;
 background-color: #ddd;
 border-radius: 4px;
`

export const LogOutText = styled.Text`
  font-size: 20px;
  background-color: #ddd
`
