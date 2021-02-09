import NavLink from '../atoms/NavLink.js'

function Navigation() {
  return `
    <nav>
      <ul>
        ${NavLink('Latest')}
        ${NavLink('Popular')}
        ${NavLink('Wallpaper')}
        ${NavLink('People')}
        ${NavLink('Nature')}
        ${NavLink('Architecture')}
      </ul>
    </nav>`
}

export default Navigation