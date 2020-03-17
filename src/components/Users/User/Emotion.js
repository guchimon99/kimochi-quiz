import React, { useCallback, useMemo } from 'react'
import { Link, Redirect } from 'react-router-dom'
import * as Icons from 'react-feather'

import { useUpdateUser, useUser } from '../../../hooks/users'
import { useEmotions } from '../../../hooks/emotions'

import Form from '../../Form'
import Button, { RadioButton } from '../../Button'
import { useForm, useInput } from '../../../hooks/form'
import Page, { Header, Title, Body, Footer } from '../../Page'

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
    <Page>
      <Header>
        <div className="flex">
          <Link to="/users" className="block p-2">
            <Icons.ArrowLeft />
          </Link>
        </div>
        <Title>{user.displayName}のいまのキモチは？</Title>
      </Header>
      <Form onSubmit={submitHandler}>
        <Body>
          <div className="flex flex-grow flex-wrap overflow-auto flex-basis-0 pt-32 pb-32">
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
        </Body>
        <Footer>
          <Button disabled={!isSubmittable}>つぎへ</Button>
        </Footer>
      </Form>
    </Page>
  )
}

export default Emotion
