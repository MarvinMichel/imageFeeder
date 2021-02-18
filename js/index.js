// Modules
import { handleRouteChange } from './router/router.js'
import { resizeGridItems } from './modules/resizeGridItems.js'

// Components
import Header from './components/molecules/Header.js'
import Navigation from './components/organisms/Navigation.js'
import SearchForm from './components/organisms/SearchForm.js'

// HTML variables
const body = document.querySelector('body')
const main = document.querySelector('main')

// Insert HTML-elements
body.insertAdjacentHTML('afterbegin', Header())
main.insertAdjacentElement('afterbegin', Navigation())
main.insertAdjacentElement('afterbegin', SearchForm())

// Retrieve first Feed render
handleRouteChange()

// Resize images inside grid
window.addEventListener('resize', resizeGridItems)