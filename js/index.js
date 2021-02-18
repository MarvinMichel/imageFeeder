import { handleRouteChange } from './router/router.js'
import { resizeGridItems } from './modules/resizeGridItems.js'

import Header from './components/molecules/Header.js'
import Navigation from './components/organisms/Navigation.js'
import SearchForm from './components/organisms/SearchForm.js'

const body = document.querySelector('body')
const main = document.querySelector('main')

body.insertAdjacentHTML('afterbegin', Header())
main.insertAdjacentElement('afterbegin', Navigation())
main.insertAdjacentElement('afterbegin', SearchForm())

handleRouteChange()

window.addEventListener('resize', resizeGridItems)