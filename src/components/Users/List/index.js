import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import * as Icons from 'react-feather'

import { useUsersAsArray } from '../../../hooks/users'

import Page, { Header, Title, Footer, Body } from '../../Page'
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
    <Page>
      <Header>
        <Title>あなたはだれですか？</Title>
      </Header>
      <Body>
        <div className="min-h-screen flex flex-col jusitify-start pt-24 pb-20">
          {mode === 'select' ? (
            <Select onStartRemove={() => setMode('remove')} />
          ) : (
            <Remove onCancel={() => setMode('select')} />
          )}
        </div>
      </Body>
      <Footer>
        <LinkButton to="/users/new" color="secondary">
          <Icons.Plus />
        </LinkButton>
      </Footer>
    </Page>
  )
}

export default List
