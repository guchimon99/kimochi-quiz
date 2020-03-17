import React from 'react'
import styled from 'styled-components'

const Page = ({ children }) => (
  <div className="w-full">
    {children}
  </div>
)

export const Header = ({ children }) => (
  <div className="fixed top-0 left-0 right-0 bg-yellow-500 border-b border-yellow-600">
    <div className="max-w-lg mx-auto p-4">
      {children}
    </div>
  </div>
)

export const Title = styled.div.attrs(({ className }) => ({
  className: `${className} text-2xl font-bold text-center`
}))``

export const Body = styled.div.attrs(({ className }) => ({
  className: `${className} max-w-lg mx-auto px-4`
}))``

export const Footer = ({ children }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-yellow-500 border-t border-yellow-600">
    <div className="max-w-lg mx-auto p-4">
      {children}
    </div>
  </div>
)

export default Page
