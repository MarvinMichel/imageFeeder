import { resizeInstance } from '../modules/resizeGridItems.js'

import Feed from '../components/organisms/Feed.js'

const routes = [
  {
    path: '',
    action: () => Feed('photos')
  },
  {
    path: '/latest',
    action: () => Feed('photos')
  },
  {
    path: '/popular',
    action: () => Feed('photos', '&order_by=popular')
  },
  {
    path: '/:topic',
    action: (context) => Feed(`topics/${context.params.topic}/photos`)
  },
  {
    path: '/search/:query',
    action: (context) => Feed('search/photos', `&query=${context.params.query}`)
  }
]

const router = new window.UniversalRouter(routes)

async function handleRouteChange(url = '') {
  const main = document.querySelector('main')
  const feedContainer = main.querySelector('.feed')

  try {
    const renderData = await router.resolve(url)
    feedContainer
      ? main.replaceChild(renderData, feedContainer)
      : main.appendChild(renderData)
  } finally {
    const gridCells = document.querySelectorAll('.feed > div')
    gridCells.forEach(gridCell => imagesLoaded( gridCell, resizeInstance))
  }
}

export { handleRouteChange }