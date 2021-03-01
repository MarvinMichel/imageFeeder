// Modules
import { resizeGridItems } from './modules/resizeGridItems.js'

// Components
import Header from './components/organisms/Header.js'
import Navigation from './components/organisms/Navigation.js'
// import SearchForm from './components/molecules/SearchForm.js'

// Client-side router
import Router from './router/router.js'
import routes from './router/routes.js'

// Elements
const body = document.querySelector('body')
const main = document.querySelector('main')

// Insert elements
body.prepend(Header())
main.insertAdjacentElement('afterbegin', Navigation())
// main.insertAdjacentElement('afterbegin', SearchForm())

// Create instance of client-side router
const router = new Router(routes)

// Resize grid on window resize
window.addEventListener('popstate', () => router._loadInitialRoute(false))
window.addEventListener('resize', resizeGridItems)

export { router, main }