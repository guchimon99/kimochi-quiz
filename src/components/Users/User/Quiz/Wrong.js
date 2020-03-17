import React, { useState, useCallback } from 'react'
import * as Icons from 'react-feather'

import Hugging from '../../../../images/hugging.svg'

import Button from '../../../Button'
import Form from '../../../Form'

const Wrong = ({ user, lastAnswer, onClose }) => {
  const [isHugged, setIsHugged] = useState(false)

  const submitHandler = useCallback(event => {
    event.preventDefault()
    onClose()
  }, [onClose])

  return (
    <Form onSubmit={submitHandler}>
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="max-w-lg mx-auto h-full flex flex-col p-4 justify-center">
            <div className="bg-white rounded-lg p-4 shadow-lg">

              <div className="text-2xl font-bold text-center mb-4">ざんねん！</div>

              <div className="text-center mb-4">
                <div className="text mb-2">
                  {user.displayName}のキモチは<span className="text-3xl px-1">{lastAnswer.emotion.emoji}</span>ではありません。
                </div>
                <div className="font-bold mb-2 text-center">ハグして もういちど こたえよう</div>
              </div>

              <div className="w-full mb-4" style={{ height: '15rem' }}>
                <img src={Hugging} className="w-full h-full object-contain" alt=""/>
              </div>

              <label htmlFor="huggedCheckBox" className="flex mb-4 justify-center">
                <div className={`mr-2 ${isHugged ? '' : 'opacity-50'}`}>
                  { isHugged ? <Icons.CheckSquare /> : <Icons.Square />}
                </div>
                <span>{user.displayName}にハグした</span>
                <input className="hidden" id="huggedCheckBox" required type="checkbox" onChange={event => setIsHugged(event.target.checked)} />
              </label>
              <div>
                <Button disabled={!isHugged}>もういちど こたえる</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  )
}

export default Wrong
