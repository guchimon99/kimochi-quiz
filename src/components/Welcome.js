import React from 'react'
import { FACES } from '../constants'

const Welcome = () => (
  <div className="max-w-lg mx-auto h-full flex flex-col">
    <div className=" mx-auto py-8 text-center font-bold">
      <div className="text-2xl">
      いまは <span className="border-b-2 border-white p-2">
          <span className="opacity-50">どんな</span>
        </span> きもち
      </div>
      <div>あなたはどんな気持ち？</div>
    </div>
    <div className="flex-grow flex p-2 flex-wrap overflow-auto">
      {FACES.map((face, i) =>
        <div className="w-1/6 p-2 mb-2" key={i}>
          <button className="bg-white p-2 rounded w-full">
            <span className="text-4xl">{face}</span>
          </button>
        </div>
      )}
    </div>
    <div className="p-4">
      <button className="w-full text-center rounded bg-blue-500 text-white rounded-lg p-2">
        クイズをつくる
      </button>
    </div>
  </div>
)

export default Welcome
