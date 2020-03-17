import React, { useCallback } from 'react'
import { Link, Redirect } from 'react-router-dom'
import * as Icons from 'react-feather'

import { useInput, useForm } from '../../hooks/form'
import { useAddUser, useUsersAsArray } from '../../hooks/users'

import Form, { Field, Label, Input } from '../Form'
import Button from '../Button'
import Page, { Header, Title, Body, Footer } from '../Page'

const New = () => {
  const users = useUsersAsArray()

  const { start, succeed, isProcessing, isSucceeded } = useForm()
  const [displayName, displayChangeHandler] = useInput()
  const addUser = useAddUser()

  const submitHandler = useCallback(event => {
    event.preventDefault()
    if (isProcessing) return
    start()
    addUser({ displayName })
    succeed()
  }, [start, succeed, addUser, displayName, isProcessing])

  if (isSucceeded) return <Redirect to="/users" />

  return (
    <Page>
      <Header>
        {users.length > 0 ? (
          <div className="flex">
            <Link to="/users" className="block p-2">
              <Icons.X />
            </Link>
          </div>
        ) : null}
        <Title>あなたのなまえは？</Title>
      </Header>
      <Form onSubmit={submitHandler}>
        <Body>
          <div className="pt-32 pb-20 min-h-screen flex flex-col justify-center">
            <Field>
              <Label>なまえ</Label>
              <Input required maxLength={50} value={displayName} onChange={displayChangeHandler} />
            </Field>
          </div>
        </Body>
        <Footer>
          <Button>作成</Button>
        </Footer>
      </Form>
    </Page>
  )
}

export default New
