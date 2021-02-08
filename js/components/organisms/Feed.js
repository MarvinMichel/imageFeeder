import {getImageData} from '../../modules/getImageData.js'

import Image from '../molecules/Image.js'

async function Feed(endpoint, param) {
  const images = await getImageData(endpoint, param)

  return `
    ${images.map(image => {
      return (
        Image(image.urls.regular, image.alt_description, image.user.username)
      )
    }).join('')}
  `
}

export default Feed