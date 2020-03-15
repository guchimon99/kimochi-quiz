import React from 'react'

import { UsersProvider } from '../providers/users'
import { useUsersProvider } from '../hooks/users'
import { useEmotionsProvider } from '../hooks/emotions'
import { EmotionsProvider } from '../providers/emotions'

import Main from './Main'
import Splash from './Splash'

const App = () => {
  const emotionsProviderValue = useEmotionsProvider()
  const usersProviderValue = useUsersProvider()

  return (
    <EmotionsProvider value={emotionsProviderValue}>
      <UsersProvider value={usersProviderValue}>
        <Main />
        <Splash />
      </UsersProvider>
    </EmotionsProvider>
  )
}

export default App
