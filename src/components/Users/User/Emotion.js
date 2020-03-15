import React, { useCallback, useMemo } from 'react'
import { Link, Redirect } from 'react-router-dom'
import * as Icons from 'react-feather'

import { useUpdateUser, useUser } from '../../../hooks/users'
import { useEmotions } from '../../../hooks/emotions'

import Form from '../../Form'
import Button, { RadioButton } from '../../Button'
import { useForm, useInput } from '../../../hooks/form'

const Emotion = ({ match }) => {
  const userID = match.params.id

  const user = useUser(userID)
  const [selected, changeSelectedHandler] = useInput()
  const emotions = useEmotions()
  const { isProcessing, succeed, start, isSucceeded } = useForm()
  const updateUser = useUpdateUser()
  const isSubmittable = useMemo(() => !!selected, [selected])

  const submitHandler = useCallback(event => {
    event.preventDefault()
    if (isProcessing) return
    start()
    updateUser({
      ...user,
      emotion: selected
    })
    succeed()
  }, [isProcessing, start, updateUser, succeed, selected, user])

  if (isSucceeded) return <Redirect to={`/users/${userID}/quiz`} />

  return (
    <Form className="max-w-lg mx-auto min-h-screen flex flex-col" onSubmit={submitHandler}>
      <div className="p-4 text-center relative">
        <div className="flex">
          <Link to="/users" className="block p-2">
            <Icons.ArrowLeft />
          </Link>
        </div>
        <div className="text-2xl font-bold">{user.displayName}のいまのキモチは？</div>
      </div>
      <div className="flex px-4 flex-grow flex-wrap overflow-auto flex-basis-0">
        {emotions.map(emotion => {
          return (
            <div key={emotion.id} className="w-1/4 p-1">
              <RadioButton required value={emotion.id} currentValue={+selected} onChange={changeSelectedHandler} name="emotion">
                <span className='block text-center text-3xl'>{emotion.emoji}</span>
              </RadioButton>
            </div>
          )
        })}
      </div>
      <div className="p-4">
        <Button disabled={!isSubmittable}>つぎへ</Button>
      </div>
    </Form>
  )
}

export default Emotion
