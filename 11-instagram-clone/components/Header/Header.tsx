import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Container, Content, Title, User } from './header.styled'
import icon from '../../assets/images/icon.png'
import useUserStore from '../../stores/useUserStore'
import { Avatar } from '../Author/author.styled'

const Header = () => {
  const user = useUserStore(state => state.user)
  const fallbackAvatar = "https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos-de-sol_23-2149436188.jpg?w=826&t=st=1695302997~exp=1695303597~hmac=2e1dfdc07e52744635156ed33107b5918eb446b8d55d442902526d4fd2a4a6d7"

  return (
    <Container>
      <Content>
        <Image
          source={icon as ImageSourcePropType}
          style={{ width: 35 * 0.625, height: 35 }}
        />
        <Title>Lambe Lambe</Title>
      </Content>
      {user && <User>
        <Avatar source={{ uri: user.avatarUrl || fallbackAvatar }} style={{ width: 30, height: 30, borderRadius: 15 }} />
      </User>}
    </Container>
  )
}

export default Header
