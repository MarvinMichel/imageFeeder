import { getImageData } from "./modules/getImageData.js"

(function() {
  getImageData('photos/random')

  const searchForm = document.querySelector('form')
  searchForm.addEventListener('submit', e => {
    e.preventDefault()
    if (search.value) getImageData('search/photos/', search.value)
  })
})()