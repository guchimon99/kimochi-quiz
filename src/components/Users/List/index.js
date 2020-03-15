import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import * as Icons from 'react-feather'

import { useUsersAsArray } from '../../../hooks/users'

import { LinkButton } from '../../Button'

import Select from './Select'
import Remove from './Remove'

const List = () => {
  const [mode, setMode] = useState('select')
  const users = useUsersAsArray()

  if (!users || users.length < 1) {
    return <Redirect to="/users/new" />
  }

  return (
    <div className="max-w-lg min-h-screen mx-auto flex flex-col">
      <div className="p-4 pt-8 text-center">
        <div className="text-2xl font-bold">あなたはだれですか？</div>
      </div>

      <div className="flex flex-col flex-grow p-4 flex-basis-0 overflow-auto">
        {mode === 'select' ? (
          <Select onStartRemove={() => setMode('remove')} />
        ) : (
          <Remove onCancel={() => setMode('select')} />
        )}
      </div>

      <div className="p-4">
        <LinkButton to="/users/new" color="secondary">
          <Icons.Plus />
        </LinkButton>
      </div>
    </div>
  )
}

export default List
