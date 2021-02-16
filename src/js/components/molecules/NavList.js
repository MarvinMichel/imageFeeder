import { handleRouteChange } from '../../router/router.js'

import NavLink from '../atoms/NavLink.js'

function NavList() {
  // All category names
  const linkNames = [
    'Latest',
    'Popular',
    'Wallpapers',
    'People',
    'Nature',
    'Architecture',
    'Current Events',
    'Business & Work',
    'Experimental',
    'Fashion',
    'Film',
    'Health & Welness',
    'Interiors',
    'Street Photography',
    'Technology',
    'Travel',
    'Textures & Patterns',
    'Animals'
  ]

  const navList = document.createElement('ul')
  navList.addEventListener('click', event => {
    const target = event.target
    const url = target.innerText.replace('&', '').replace(/\s+/g, '-').toLowerCase()

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