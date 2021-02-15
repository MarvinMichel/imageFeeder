import { handleRouteChange } from './router/router.js'

import Navigation from './components/organisms/Navigation.js'
import DetailModal from './components/organisms/DetailModal.js'

const main = document.querySelector('main')
main.insertAdjacentElement('beforeend', Navigation())

handleRouteChange()