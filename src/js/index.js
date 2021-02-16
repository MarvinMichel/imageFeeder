import { handleRouteChange } from './router/router.js'
import { resizeGridItems } from './modules/resizeGridItems.js'

import Navigation from './components/organisms/Navigation.js'

const main = document.querySelector('main')
main.insertAdjacentElement('beforeend', Navigation())

handleRouteChange()

window.addEventListener('resize', resizeGridItems)