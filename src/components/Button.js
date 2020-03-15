import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const baseClassName = 'block w-full rounded-lg text-center p-2 flex justify-center'

const primaryClassName = 'border-2 border-b-4 bg-blue-500 border-blue-600 text-white'
const secondaryClassName = 'border-2 border-b-4 bg-white border-gray-300 text-gray-900'
const linkClassName = 'bg-transparent text-gray-800'

const selectedClassName = 'border-2 border-b-4 bg-blue-200 border-blue-400 text-blue-500'
const notSelectedClassName = 'border-2 border-b-4 bg-white border-gray-200 text-gray-800'

const buildColorClassName = color => {
  switch (color) {
    case 'link':
      return linkClassName
    case 'secondary':
      return secondaryClassName
    case 'primary':
    default:
      return primaryClassName
  }
}

const buildClassName = ({ className, color, disabled }) => (
  `${baseClassName} ${className} ${buildColorClassName(color)} ${disabled ? 'opacity-50' : 0}`
)

const buildRadioClassName = ({ className, isSelected, disabled }) => (
  `${baseClassName} ${className} ${isSelected ? selectedClassName : notSelectedClassName} ${disabled ? 'opacity-50' : 0}`
)

const Button = styled.button.attrs(props => ({
  className: buildClassName(props)
}))``

export const LinkButton = styled(Link).attrs(props => ({
  className: buildClassName(props)
}))``

export const RadioButton = ({ id, name, required, value, className, currentValue, onChange, disabled, children, ...props }) => {
  id = id || `${name}-${value}`
  const isSelected = currentValue === value
  return (
    <label htmlFor={id} {...props} className={buildRadioClassName({ className, isSelected, disabled })}>
      {children}
      <input required={!!required} hidden id={id} type="radio" value={value} name={name} onChange={onChange} />
    </label>
  )
}

export default Button
