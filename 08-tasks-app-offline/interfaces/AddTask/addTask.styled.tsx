import { TouchableWithoutFeedback } from "react-native"
import styled from "styled-components/native"
import theme from "../../constants/colors"

export const Container = styled.View`
background-color: #212125bb;
flex: 1;
justify-content: center;
padding-horizontal: 12px;
`

export const Wrapper = styled.TouchableOpacity`
  background-color: #fff;
  height: fit-content;
  border-radius: 4px;
  overflow: hidden;
`

export const Header = styled.View`
background-color: ${theme.colors.today};
padding: 8px;
`

export const HeaderText = styled.Text`
color: #fff;
text-align: center;
font-size: 16px;
`

export const Content = styled.View`
padding: 12px;
gap: 24px;
`

export const Input = styled.TextInput`
border: 1px solid #ddd;
border-radius: 4px;
padding: 2px 8px;
`

export const ButtonWrapper = styled.View`
flex-direction: row;
gap: 8px;
justify-content: space-between
`

export const Btn = styled.TouchableOpacity`
background-color: ${theme.colors.today};
padding: 4px 12px;
border-radius: 4px;
border: 1px solid ${theme.colors.today}
`

export const BtnText = styled.Text`
color: #fff;
`

