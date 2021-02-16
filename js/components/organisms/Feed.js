import { getImageData } from '../../modules/getImageData.js'

import Image from '../molecules/Image.js'
import DetailModal from './DetailModal.js'

async function Feed(param, endpoint) {
  const images = await getImageData(param, endpoint)
  const feedContainer = document.createElement('section')
  const main = document.querySelector('main')

  feedContainer.classList.add('feed')
  feedContainer.addEventListener('click', event => {
    const target = event.target
    
    if (target.tagName === "IMG") {
      DetailModal(undefined, `photos/${target.id}`)
        .then(renderData => main.appendChild(renderData))
    }
  })

  images.map(image => {
    const { id, urls: { small: src }, alt_description: alt, user: { username } } = image
    feedContainer.insertAdjacentHTML('beforeend', Image(id, src, alt, username))
  }).join('')

  return feedContainer
}

export default Feed