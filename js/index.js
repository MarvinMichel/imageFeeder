import renderFeed from './modules/renderFeed'

// function searchImages() {
//   const searchForm = document.querySelector('form')
//   searchForm.addEventListener('submit', e => {
//     e.preventDefault()
//     if (search.value) getImageData('search/photos/', search.value)
//   })
// }

(function () {
  const route = {
    root: '/',
    popular: '#popular',
    latest: '#latest',
    search: '#search'
  }
  switch (route) {
    case root:
      renderFeed('photos/')
      break;
    case popular:
      renderFeed('photos')
  
    default:
      break;
  }
})()