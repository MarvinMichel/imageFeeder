import ImagePhoto from '../atoms/ImagePhoto.js'
import ImageDescription from '../atoms/ImageDescription.js'

function Image(src, alt, desc) {
  return `
    <figure class="feed--image">
      ${ImagePhoto(src, alt)}
      ${ImageDescription(desc)}
    </figure>`
}

export default Image