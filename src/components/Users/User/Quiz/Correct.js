import React from 'react'

import Hugging from '../../../../images/hugging.svg'

import { LinkButton } from '../../../Button'

const Correct = ({ user, lastAnswer }) => {
  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0">
        <div className="max-w-lg mx-auto h-full flex flex-col p-4 justify-center">
          <div className="bg-white rounded-lg p-4 shadow-lg">

            <div className="text-2xl font-bold text-center mb-4">
              <span role="img" aria-label="クラッカー">🎉</span>
              <span role="img" aria-label="クラッカー">🎉</span>
              <span className="mx-1">おめでとう！</span>
              <span role="img" aria-label="クラッカー">🎉</span>
              <span role="img" aria-label="クラッカー">🎉</span>
            </div>

            <div className="text-center mb-4">
              <div className="text mb-2">
                {user.displayName}のキモチは<span className="text-3xl px-1">{lastAnswer.emotion.emoji}</span>です！
              </div>
            </div>

            <div className="w-full mb-4" style={{ height: '15rem' }}>
              <img src={Hugging} className="w-full h-full object-contain" alt=""/>
            </div>

            <div className="text-center mb-4 font-bold text-xl">
              {user.displayName}にハグしてもらおう！
            </div>

            <div>
              <LinkButton color="secondary" to="/users">{user.displayName}にクイズをだす</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Correct
