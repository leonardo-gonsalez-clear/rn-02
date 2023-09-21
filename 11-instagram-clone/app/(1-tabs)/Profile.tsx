import { View, Text } from 'react-native'
import React from 'react'
import UserProfile from '../../interfaces/UserProfile/UserProfile'
import { Redirect } from 'expo-router'
import useUserStore from '../../stores/useUserStore'

const Profile = () => {
  const user = useUserStore(state => state.user)

  return (
    !user ? <Redirect href={"/(2-login)"} /> : <UserProfile />
  )
}

export default Profile
