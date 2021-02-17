import { handleRouteChange } from '../../router/router.js'

import Label from '../molecules/Label.js'
import Button from '../atoms/Button.js'

function SearchForm() {
  const form = document.createElement('form')
  form.addEventListener('submit', event => {
    event.preventDefault()
    const input = document.getElementById('search')
    handleRouteChange(`/search/${input.value}`)
    input.value = ''
  })
  form.insertAdjacentHTML('beforeend', Label('Search...'))
  form.appendChild(Button('Search'))

  return form
}

export default SearchForm