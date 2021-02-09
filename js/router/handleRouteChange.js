import removeChildren from '../modules/removeChildren.js'

function handleRouteChange(router, url = '') {
  const feedContainer = document.querySelector('.feed')

  router.resolve(url).then(feed => {
    removeChildren(feedContainer)
    feedContainer.insertAdjacentHTML('beforeend', feed)
  })
}

export default handleRouteChange