// Modules
import { resizeGridItems } from './modules/resizeGridItems.js'

// Components
import Header from './components/molecules/Header.js'
import Navigation from './components/organisms/Navigation.js'
import SearchForm from './components/organisms/SearchForm.js'

// Client-side router
import Router from './router/router.js'
import routes from './router/routes.js'

// Elements
const body = document.querySelector('body')
const main = document.querySelector('main')

// Insert elements
body.insertAdjacentHTML('afterbegin', Header())
main.insertAdjacentElement('afterbegin', Navigation())
main.insertAdjacentElement('afterbegin', SearchForm())

const router = new Router(routes)

// Resize images inside grid
window.addEventListener('resize', resizeGridItems)

export { router, main }