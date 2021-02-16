import ImagePhoto from '../atoms/ImagePhoto.js'
import ImageDescription from '../atoms/ImageDescription.js'

function Image(id, src, alt, desc) {
  return `
    <figure class="feed--image">
      ${ImagePhoto(src, alt, id)}
      ${ImageDescription(desc)}
    </figure>`
}

export default Image