import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
`

export const BgImage = styled.ImageBackground`
flex: 3;
justify-content: flex-end;
padding: 12px;
position: relative;
`


export const Title = styled.Text`
  font-family: "Lato";
  font-size: 30px;
  color: #FFF;
  font-weight: bold;
`

export const SubTitle = styled.Text`
  font-family: "Lato";
  font-size: 16px;
  color: #FFF;
  font-weight: bold;

`
export const Content = styled(FlatList<ITask>)`
flex: 7;
`

export const IconBar = styled.TouchableOpacity`
  flex-direction: row;
  position: absolute;
  top: 12px;
  right: 12px;
`

