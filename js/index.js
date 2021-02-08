import { getImageData } from './modules/getImageData.js'

import Feed from './components/organisms/Feed.js'

function searchImages() {
  const searchForm = document.querySelector('form')
  searchForm.addEventListener('submit', e => {
    e.preventDefault()
    if (search.value) getImageData('search/photos/', search.value)
  })
}

(async function getFeedData() {
  const mainContent = document.querySelector('main')
  const feed = await Feed()
  mainContent.insertAdjacentHTML('beforeend', feed)
})()