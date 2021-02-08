import ImagePhoto from "../atoms/ImagePhoto"
import ImageDescription from "../atoms/ImageDescription"

function Image() {
  return (`
    <figure class="feed--image">
      ${ImagePhoto}
      ${ImageDescription}
    </figure>
  `)
}

export default Image