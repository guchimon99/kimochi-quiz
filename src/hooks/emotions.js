import { useContext, useState, useReducer, useCallback } from 'react'
import { emotionsReducer } from '../reducers/emotions'
import { EmotionsContext } from '../providers/emotions'
import { EMOTIONS, QUIZE_CHOICES_COUNT } from '../constants'

export const useEmotionsProvider = () => {
  const value = useReducer(emotionsReducer, null)
  return value
}

export const useEmotions = () => {
  const emotions = useContext(EmotionsContext)[0]
  return emotions
}

export const useLoadEmotions = () => {
  const dispatch = useContext(EmotionsContext)[1]
  return useCallback(() => {
    dispatch({
      type: 'LOAD',
      payload: { emotions: EMOTIONS }
    })
  }, [dispatch])
}

const buildChoices = (correct, baseEmotions) => {
  const targetEmotions = [...baseEmotions].filter(emotion => emotion.id !== correct)
  const emotions = [baseEmotions.find(e => e.id === +correct)]

  Array.from({ length: QUIZE_CHOICES_COUNT - 1 }).forEach(() => {
    const takeIndex = Math.floor(Math.random() * targetEmotions.length)
    const emotion = targetEmotions.splice(takeIndex, 1)[0]

    const insertIndex = Math.floor(Math.random() * (emotions.length + 1))
    emotions.splice(insertIndex, 0, emotion)
  })

  const choices = emotions.map((emotion, index) => {
    return {
      id: index + 1,
      isAnswered: false,
      isCorrect: emotion.id === +correct,
      emotion
    }
  })

  return choices
}

export const useChocies = (correct) => {
  const emotions = useEmotions()
  const [choices, setChoices] = useState(buildChoices(correct, emotions))
  const [lastAnswer, setLastAnswer] = useState(null)

  const answer = useCallback(choice => {
    const newChoices = choices.map(c => {
      return (
        c.id === choice.id ? (
          {
            ...c,
            isAnswered: true
          }
        ) : c
      )
    })
    setLastAnswer(choice)
    setChoices(newChoices)
  }, [choices])

  return {
    answer,
    choices,
    lastAnswer
  }
}
