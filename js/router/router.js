/* global imagesLoaded */

// Modules
import { resizeInstance } from '../modules/resizeGridItems.js'
import { removeContent } from '../modules/removeContent.js'

// Components
import LoadingElement from '../components/atoms/LoadingElement.js'

// Routes
import routes from './routes.js'

// HTML variables
const contentContainer = document.getElementById('content')
const loading = LoadingElement()

// Create router instance
const router = new window.UniversalRouter(routes)

// Route change handler
async function handleRouteChange(url = '') {
  // Show loading state
  removeContent(contentContainer)
  contentContainer.insertAdjacentHTML('beforeend', loading)

  // Retrieve new feed content
  try {
    const renderData = await router.resolve(url)
    removeContent(contentContainer)
    contentContainer.appendChild(renderData)
  } finally {
    const gridCells = document.querySelectorAll('.feed > div')
    gridCells.forEach((gridCell) => imagesLoaded(gridCell, resizeInstance))
  }
}

export { handleRouteChange }
