import { getImageData } from '../../modules/getImageData.js'

import Image from '../molecules/Image.js'

async function Feed(endpoint, param) {
  const images = await getImageData(endpoint, param)
  const feedContainer = document.createElement('section')
  feedContainer.classList.add('feed')

  images.map(image => {
    const { urls: { regular }, alt_description, user: { username } } = image
    feedContainer.insertAdjacentHTML('beforeend', Image(regular, alt_description, username))
  }).join('')

  return feedContainer
}

export default Feed