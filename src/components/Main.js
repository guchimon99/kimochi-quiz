import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Users from './Users'
import { useUsers, useSaveUsers } from '../hooks/users'
import { useIsReady } from '../hooks/app'

const Main = () => {
  const isReady = useIsReady()
  const users = useUsers()
  const saveUsers = useSaveUsers()

  useEffect(() => {
    if (!isReady) return
    saveUsers(users)
  }, [isReady, saveUsers, users])

  if (!isReady) return null

  return (
    <div className="bg-yellow-500 w-full min-h-screen">
      <Router>
        <Switch>
          <Route path="/users" component={Users} />
          <Redirect to="/users" />
        </Switch>
      </Router>
    </div>
  )
}

export default Main
