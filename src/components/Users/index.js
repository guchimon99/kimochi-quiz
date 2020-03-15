import React from 'react'
import { Route, Switch } from 'react-router-dom'

import List from './List'
import New from './New'
import User from './User'

const Users = () => (
  <Switch>
    <Route path="/users" exact component={List} />
    <Route path="/users/new" component={New} />
    <Route path="/users/:id" component={User} />
  </Switch>
)

export default Users
