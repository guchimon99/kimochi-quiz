import React from 'react'

import { useUsersAsArray, useRemoveUser } from '../../../hooks/users'

import Button from '../../Button'

const Remove = ({ onCancel }) => {
  const users = useUsersAsArray()
  const removeUser = useRemoveUser()
  return (
    <>
      {users.map(user =>
        <Button color="secondary" key={user.id} className="mb-3" onClick={() => removeUser(user)}>
          {user.displayName} をけす
        </Button>
      )}
      <Button onClick={onCancel} color="link">
        もどる
      </Button>
    </>
  )
}

export default Remove
