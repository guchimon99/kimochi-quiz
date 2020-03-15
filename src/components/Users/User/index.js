import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { useUser } from '../../../hooks/users'

import Emotion from './Emotion'
import Quiz from './Quiz'

const User = ({ match }) => {
  const { id } = match.params
  const user = useUser(id)
  if (!user) return <Redirect to="/users" />
  return (
    <Switch>
      <Route path="/users/:id/emotion" component={Emotion} />
      <Route path="/users/:id/quiz" component={Quiz} />
      <Redirect to={`/users/${id}/emotion`} />
    </Switch>
  )
}

export default User
