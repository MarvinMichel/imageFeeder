import { getImageData } from '../../modules/getImageData.js'

import DetailImage from '../atoms/DetailImage.js'
import DetailSummary from '../molecules/DetailSummary.js'

async function DetailModal(param, endpoint) {
  const {
    alt_description,
    urls: { regular: src },
    likes,
    user: { name },
    downloads
  } = await getImageData(param, endpoint)

  const main = document.querySelector('main')

  const modal = document.createElement('aside')
  const modalBackground = document.createElement('div')

  modal.classList.add('modal')
  modal.appendChild(modalBackground)
  modal.insertAdjacentHTML('beforeend', (`
    <article class="modal--content">
      ${DetailImage(src, alt_description)}
      ${DetailSummary(name, likes, downloads)}
    </article>
  `))

  modalBackground.classList.add('modal--background')
  modalBackground.setAttribute('aria-hidden', true)
  modalBackground.setAttribute('role', "none")
  modalBackground.addEventListener('click', () => {
    main.removeChild(modal)
  })

  return modal
}

export default DetailModal