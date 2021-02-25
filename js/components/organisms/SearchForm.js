// Router
import { router } from '../../index.js'

// Components
import Label from '../molecules/Label.js'
import Button from '../atoms/Button.js'

/**
 * Create search form with input, button and label
 * Add @function loadRoute for search functionality
 * Returns HTML Element <form>
 */
function SearchForm() {
  const form = document.createElement('form')
  form.addEventListener('submit', event => {
    event.preventDefault()

    const input = document.getElementById('search')
    router.loadRoute('search', input.value)
    input.value = ''
  })

  form.insertAdjacentHTML('beforeend', Label('Search...'))
  form.appendChild(Button('Search'))

  return form
}

export default SearchForm