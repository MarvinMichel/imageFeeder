import Feed from '../components/organisms/Feed.js'

function createRouter() {
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

  return new window.UniversalRouter(routes)
}

export default createRouter