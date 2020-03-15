const localStorage = window.localStorage
const JSON = window.JSON

export const save = (key, value) => {
  const json = JSON.stringify(value)
  localStorage.setItem(key, json)
}

export const load = (key) => {
  const json = localStorage.getItem(key)
  return JSON.parse(json)
}
