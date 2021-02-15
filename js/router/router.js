import removeChildren from '../modules/removeChildren.js'

import Feed from '../components/organisms/Feed.js'

const routes = [
  {
    path: '',
    action: () => Feed()
  },
  {
    path: '/latest',
    action: () => Feed()
  },
  {
    path: '/popular',
    action: () => Feed('&order_by=popular')
  },
  {
    path: '/search',
    action: () => Feed(`&query=${query}`, 'search/photos')
  }
]

const router = new window.UniversalRouter(routes)

async function handleRouteChange(url = '') {
  const main = document.querySelector('main')
  const feedOld = main.querySelector('.feed')

  router.resolve(url).then(feed => {
    feedOld
      ? main.replaceChild(feed, feedOld)
      : main.appendChild(feed)
  })
}

export { handleRouteChange }