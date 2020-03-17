import React from 'react'

import QuizTutorial from '../../../../images/quiz-tutorial.svg'

import Button from '../../../Button'
import Page, { Header, Title, Body, Footer } from '../../../Page'

const Welcome = ({ onConfirm }) => (
  <Page>
    <Header>
      <Title>クイズをだそう！</Title>
    </Header>
    <Body>
      <div className="py-32 min-h-screen flex flex-col justify-center">
        <div className="w-full px-8 mb-4">
          <img className="w-full max-w-md h-auto" src={QuizTutorial} alt="きもちを伝える"/>
        </div>
        <div className="text-2xl text-center">ちかくにいるひとに<br/>きもちクイズをだそう</div>
      </div>
    </Body>
    <Footer>
      <Button onClick={onConfirm}>クイズをだす</Button>
    </Footer>
  </Page>
)

export default Welcome
