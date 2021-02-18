/* global imagesLoaded */

// Modules
import { resizeInstance } from '../modules/resizeGridItems.js'
import { removeContent } from '../modules/removeContent.js'

//Components
import Feed from '../components/organisms/Feed.js'
import LoadingElement from '../components/atoms/LoadingElement.js'

// HTML variables
const contentContainer = document.getElementById('content')
const loading = LoadingElement()

// Available routes and promises
const routes = [
  {
    path: '',
    action: () => Feed('photos'),
  },
  {
    path: '/latest',
    action: () => Feed('photos'),
  },
  {
    path: '/popular',
    action: () => Feed('photos', '&order_by=popular'),
  },
  {
    path: '/:topic',
    action: (context) => Feed(`topics/${context.params.topic}/photos`),
  },
  {
    path: '/search/:query',
    action: (context) => Feed('search/photos', `&query=${context.params.query}`),
  },
]

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
