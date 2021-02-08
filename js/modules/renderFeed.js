import Feed from '../components/organisms/Feed.js'

async function renderFeed(target) {
  const mainContent = document.querySelector('main')
  const feed = await Feed(target)
  mainContent.insertAdjacentHTML('beforeend', feed)
}

export default renderFeed