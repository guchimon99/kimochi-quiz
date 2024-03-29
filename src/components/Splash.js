import React, { useMemo } from 'react'

import QuizTutorial from '../images/quiz-tutorial.svg'

import { useInit, useIsReady } from '../hooks/app'

const rootBaseStyle = {
  transition: 'top 0s linear .5s, opacity .3s ease .2s'
}

const rootShownStyle = {
  top: '0%',
  opacity: 1
}

const rootHiddenStyle = {
  top: '-100%',
  opacity: 0
}

const Splash = () => {
  const isReady = useIsReady()

  const rootStyle = useMemo(() => {
    return Object.assign({}, rootBaseStyle, isReady ? rootHiddenStyle : rootShownStyle)
  }, [isReady])

  useInit()

  return (
    <div className="fixed w-full h-full flex flex-col bg-yellow-500" style={rootStyle}>
      <div className="flex-grow flex justify-center items-center">
        <img className="w-64 h-64 object-contain" src={QuizTutorial} alt="クイズを出す鳥"/>
      </div>
      <div className="text-center font-bold text-center text-2xl p-4">
        きもちクイズ
      </div>
    </div>
  )
}

export default Splash
