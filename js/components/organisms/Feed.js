import { getImageData } from '../../modules/getImageData.js'

import Image from '../molecules/Image.js'
import DetailModal from './DetailModal.js'

async function Feed(endpoint, param) {
  const images = await getImageData(endpoint, param)
  const feedContainer = document.createElement('section')
  const main = document.querySelector('main')

  feedContainer.classList.add('feed')
  feedContainer.addEventListener('click', event => {
    const target = event.target
    
    if (target.tagName === 'IMG') {
      DetailModal(`photos/${target.id}`, undefined)
        .then(renderData => main.appendChild(renderData))
    }
  })

  images.map(image => {
    const { id, urls: srcset, alt_description: alt, user: { username } } = image
    const wrapper = document.createElement('div')
    wrapper.insertAdjacentHTML('beforeend', Image(id, srcset, alt, username))
    feedContainer.appendChild(wrapper)
  }).join('')

  return feedContainer
}

export default Feed