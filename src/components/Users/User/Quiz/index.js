import React, { useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'react-feather'

import { useForm, useInput } from '../../../../hooks/form'
import { useUser, useUpdateUser } from '../../../../hooks/users'
import { useChocies } from '../../../../hooks/emotions'

import Wrong from './Wrong'
import Correct from './Correct'
import Welcome from './Welcome'

import Form from '../../../Form'
import Button, { RadioButton } from '../../../Button'

const Quiz = ({ match }) => {
  const userID = match.params.id
  const user = useUser(userID)
  const updateUser = useUpdateUser()
  const [selected, selectHandler, setValue] = useInput(null)
  const { choices, answer, lastAnswer } = useChocies(user.emotion)

  const { init, start, succeed, fail, isProcessing, isSucceeded, isFailed } = useForm()

  const finishTutorial = useCallback(() => {
    updateUser({
      ...user,
      isFinishedTutorial: true
    })
  }, [user, updateUser])

  const submitHandler = useCallback(event => {
    event.preventDefault()
    if (isProcessing) return
    const selectedChoice = choices.find(c => c.id === +selected)
    start()
    answer(selectedChoice)
    if (selectedChoice.isCorrect) {
      succeed()
    } else {
      fail()
    }
  }, [isProcessing, start, answer, selected, succeed, fail, choices])

  const closeHandler = useCallback(() => {
    init()
    setValue(null)
  }, [init, setValue])

  const isSubmittable = useMemo(() => selected !== null, [selected])

  return (
    <>
      <Form className="max-w-lg mx-auto min-h-screen flex flex-col" onSubmit={submitHandler}>
        <div className="p-4 text-center relative">
          <div className="flex">
            <Link to={`/users/${user.id}/emotion`} className="block p-2">
              <Icons.X />
            </Link>
          </div>
          <div className="text-2xl font-bold">{user.displayName}のいまのキモチは？</div>
        </div>
        <div className="flex-grow flex flex-col p-4 justify-center">
          {choices.map(choice =>
            <div key={choice.id} className="mb-4">
              <RadioButton
                name="choice" id={`choice_${choice.id}`} onChange={selectHandler}
                value={choice.id} currentValue={+selected} disabled={choice.isAnswered}>
                <div className="text-2xl">{choice.emotion.emoji}</div>
              </RadioButton>
            </div>
          )}
        </div>
        <div className="p-4">
          <Button disabled={!isSubmittable} type="submit">こたえる</Button>
        </div>
      </Form>
      <Wrong user={user} isShown={isFailed} lastAnswer={lastAnswer} onClose={closeHandler} />
      <Correct user={user} isShown={isSucceeded} lastAnswer={lastAnswer} />
      {!user.isFinishedTutorial ? <Welcome onConfirm={finishTutorial} /> : null}
    </>
  )
}

export default Quiz
