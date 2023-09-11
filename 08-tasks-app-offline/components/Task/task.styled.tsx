import styled from 'styled-components/native';

export const Container = styled.View`
flex-direction: row;
border: 0px solid #AAA;
border-bottom-width: 1px;
align-items: center;
justify-items: center;
`

export const CheckContainer = styled.TouchableOpacity`
flex: 2;
align-items: center;
align-self: center;
`

export const Content = styled.View`
flex: 9;
justify-content: center;
justify-self: center;
padding: 10px;
`

export const Title = styled.Text<{ doneAt?: Date }>`
font-size: 18px;
color: #555;
text-decoration: ${props => props.doneAt ? 'line-through' : 'none'};
`

export const EstimateDate = styled.Text`
font-size: 12px;
color: #999
`
