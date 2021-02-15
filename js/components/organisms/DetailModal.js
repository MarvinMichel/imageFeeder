import { getImageData } from '../../modules/getImageData.js'

import DetailImage from '../atoms/DetailImage.js'
import DetailSummary from '../molecules/DetailSummary.js'

async function DetailModal(param, endpoint) {
  const { description, urls: { regular }, user: { name }, likes, downloads} = await getImageData(param, endpoint)
  return `
    <div class="modal-background" aria-hidden="true" role="none"></div>
    <article class="modal">
      ${DetailImage(regular, description)}
      ${DetailSummary(name, likes, downloads)}
    </article>
  `
}

export default DetailModal