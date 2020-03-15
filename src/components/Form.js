import styled from 'styled-components'

const Form = styled.form.attrs(({ className }) => ({
  className: `${className}`
}))``

export const Field = styled.div.attrs(({ className }) => ({
  className: `flex flex-col ${className}`
}))``

export const Label = styled.label.attrs(({ className }) => ({
  className: `block mb-3 text-gray-700 font-bold ${className}`
}))``

export const Input = styled.input.attrs(({ className }) => ({
  className: `block text-lg bg-gray-200 border-gray-400 border border-b-4 rounded-lg p-2 ${className}`
}))``

export const Select = styled.select.attrs(({ className }) => ({
  className: `block border-2 rounded-lg p-2 ${className}`
}))``

export default Form
