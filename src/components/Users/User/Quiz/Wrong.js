import React from 'react'

import Button from '../../../Button'

const Wrong = ({ isShown, user, lastAnswer, onClose }) => {
  if (!isShown) return null

  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0">
        <div className="max-w-lg mx-auto h-full flex flex-col p-4 justify-center">
          <div className="bg-white rounded-lg p-4 shadow-lg">

            <div className="text-2xl font-bold text-center mb-4">ざんねん！</div>

            <div className="text-center mb-4">
              <div className="text mb-2">{user.displayName}のキモチは</div>
              <div className="text-6xl mb-2">{lastAnswer.emotion.emoji}</div>
              <div className="text mb-8">ではありません。</div>
              <div className="font-bold">{user.displayName}にハグしてもう一度答えよう</div>
            </div>

            <div>
              <Button onClick={onClose}>{user.displayName}にハグした</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wrong
