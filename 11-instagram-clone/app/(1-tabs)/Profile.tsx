import { View, Text } from 'react-native'
import React from 'react'
import UserProfile from '../../interfaces/UserProfile/UserProfile'
import { Redirect } from 'expo-router'

const Profile = () => {
  const cond = true
  return (
    cond ? <Redirect href={"/(2-login)"} /> : <UserProfile />
  )
}

export default Profile
