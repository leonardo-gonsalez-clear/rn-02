import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Container, Content, Title } from './header.styled'
import icon from '../../assets/images/icon.png'

const Header = () => {
  return (
    <Container>
      <Content>
        <Image
          source={icon as ImageSourcePropType}
          style={{ width: 35 * 0.625, height: 35 }}
        />
        <Title>Lambe Lambe</Title>
      </Content>
    </Container>
  )
}

export default Header
