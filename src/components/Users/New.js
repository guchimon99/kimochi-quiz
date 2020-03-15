import React, { useCallback } from 'react'
import { Link, Redirect } from 'react-router-dom'
import * as Icons from 'react-feather'

import { useInput, useForm } from '../../hooks/form'
import { useAddUser, useUsersAsArray } from '../../hooks/users'

import Form, { Field, Label, Input } from '../Form'
import Button from '../Button'

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
    <Form className="max-w-lg mx-auto min-h-screen flex flex-col" onSubmit={submitHandler}>
      <div className="p-4 text-center relative">
        {users.length > 0 ? (
          <div className="flex">
            <Link to="/users" className="block p-2">
              <Icons.X />
            </Link>
          </div>
        ) : null}
        <div className="text-2xl font-bold">あなたのなまえは？</div>
      </div>
      <div className="flex flex-col px-4 flex-grow justify-center">
        <Field>
          <Label>なまえ</Label>
          <Input required maxLength={50} value={displayName} onChange={displayChangeHandler} />
        </Field>
      </div>
      <div className="p-4">
        <Button>作成</Button>
      </div>
    </Form>
  )
}

export default New
