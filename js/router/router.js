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
    path: '/:topic',
    action: (context) => Feed(undefined, `topics/${context.params.topic}/photos`)
  },
  {
    path: '/search',
    action: () => Feed(`&query=${query}`, 'search/photos')
  }
]

const router = new window.UniversalRouter(routes)

async function handleRouteChange(url = '') {
  const main = document.querySelector('main')
  const feedContainer = main.querySelector('.feed')

  router.resolve(url).then(renderData => {
    feedContainer
      ? main.replaceChild(renderData, feedContainer)
      : main.appendChild(renderData)
  })
}

export { handleRouteChange }