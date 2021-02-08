import {getImageData} from '../../modules/getImageData.js'

import Image from '../molecules/Image.js'

async function Feed(target) {
  const images = await getImageData(target)

  return `
    <section class="feed">
      ${images.map(image => {
        return (
          Image(image.urls.regular, image.alt_description, image.user.username)
        )
      }).join('')}
    </section>`
}

export default Feed