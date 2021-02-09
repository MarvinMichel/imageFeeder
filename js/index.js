import createRouter from './router/router.js'
import handleRouteChange from './router/handleRouteChange.js'

import NavLink from './components/atoms/NavLink.js'

(function () {
  const router = createRouter()
  handleRouteChange(router)

  console.log(NavLink)

  const navLinks = document.querySelectorAll('nav li')
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', e => {
      navLinks.forEach(navLink => navLink.classList.remove('active'))

      const target = e.target
      target.classList.add('active')

      const url = target.innerText.toLowerCase()
      handleRouteChange(router, `/${url}`)
    })
  })
})()