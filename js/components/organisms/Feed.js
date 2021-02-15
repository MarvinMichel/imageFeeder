import { getImageData } from '../../modules/getImageData.js'

import Image from '../molecules/Image.js'

async function Feed(endpoint, param) {
  const images = await getImageData(endpoint, param)
  const feedContainer = document.createElement('section')
  feedContainer.classList.add('feed')

  images.map(image => {
    feedContainer.insertAdjacentHTML('beforeend', Image(image.urls.regular, image.alt_description, image.user.username))
  }).join('')

  return feedContainer
}

export default Feed