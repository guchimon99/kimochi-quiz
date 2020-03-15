import React from 'react'

import { useUsersAsArray } from '../../../hooks/users'

import Button, { LinkButton } from '../../Button'

const Select = ({ onStartRemove }) => {
  const users = useUsersAsArray()
  return (
    <>
      {users.map(user =>
        <LinkButton color="secondary" key={user.id} to={`/users/${user.id}`} className="mb-3">
          {user.displayName}
        </LinkButton>
      )}
      <Button color="link" onClick={onStartRemove}>
        ユーザーをけす
      </Button>
    </>
  )
}

export default Select
