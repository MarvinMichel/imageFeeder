import NavLink from '../atoms/NavLink'

function Navigation() {
  return `
    <nav>
      <ul>
        ${NavLink('random')}
        ${NavLink('popular')}
        ${NavLink('latest')}
      </ul>
    </nav>`
}

export default Navigation