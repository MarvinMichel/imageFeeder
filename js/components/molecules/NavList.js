import { handleRouteChange } from '../../router/router.js'

import NavLink from '../atoms/NavLink.js'

function NavList() {
  // All category names
  const linkNames = ['Latest', 'Popular', 'Wallpaper', 'People', 'Nature', 'Architecture']

  const navList = document.createElement('ul')
  navList.addEventListener('click', event => {
    const target = event.target
    const url = target.innerText.toLowerCase()

    // Remove active class and add to new target
    navList.childNodes.forEach(navItem => navItem.classList.remove('active'))
    target.classList.add('active')
    
    handleRouteChange(`/${url}`)
  })

  linkNames.map(linkName => {
    navList.insertAdjacentHTML('beforeend', NavLink(linkName))
  }).join('')

  // Add active class on latest tab on first render
  navList.childNodes[0].classList.add('active')

  return navList
}

export default NavList