import Feed from '../components/organisms/Feed.js'

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

export default routes