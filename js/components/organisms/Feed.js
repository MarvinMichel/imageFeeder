import { getImageData } from '../../modules/getImageData.js'
import { handleRouteChange } from '../../router/router.js'

import Image from '../molecules/Image.js'

async function Feed(param, endpoint) {
  const images = await getImageData(param, endpoint)
  const feedContainer = document.createElement('section')
  feedContainer.classList.add('feed')
  feedContainer.addEventListener('click', event => {
    const id = event.target.id
    handleRouteChange(`/${id}`)
  })

  images.map(image => {
    const { id, urls: { regular }, alt_description, user: { username } } = image
    feedContainer.insertAdjacentHTML('beforeend', Image(id, regular, alt_description, username))
  }).join('')

  return feedContainer
}

export default Feed