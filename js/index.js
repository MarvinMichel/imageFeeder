import { handleRouteChange } from './router/router.js'
import { resizeGridItems } from './modules/resizeGridItems.js'

import SearchForm from './components/organisms/SearchForm.js'
import Navigation from './components/organisms/Navigation.js'

const main = document.querySelector('main')

main.appendChild(SearchForm())
main.insertAdjacentElement('beforeend', Navigation())

handleRouteChange()

window.addEventListener('resize', resizeGridItems)