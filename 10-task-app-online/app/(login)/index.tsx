import { View, Text, Button } from 'react-native'
import React from 'react'
import { Redirect, useRouter } from 'expo-router'
import SignIn from './SignIn/SignIn'

const index = () => {
  const router = useRouter()


  return (
    <SignIn />
  )
}

export default index
