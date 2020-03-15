import React from 'react'

import Button from '../../../Button'

const Welcome = ({ onConfirm }) => (
  <div className="fixed inset-0 bg-yellow-500">
    <div className="max-w-lg mx-auto h-full flex flex-col">
      <div className="p-4 pt-8">
        <div className="font-bold text-2xl text-center">クイズをだそう！</div>
      </div>
      <div className="flex-grow flex flex-col justify-center p-4 text-2xl">
        <div>ちかく に いる ともだち や かぞく に クイズ を だそう。</div>
      </div>
      <div className="p-4">
        <Button onClick={onConfirm}>クイズをだす</Button>
      </div>
    </div>
  </div>
)

export default Welcome
