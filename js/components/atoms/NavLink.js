function NavLink(name) {
  return `
    <li class="main-nav--link">
      <a href="#${name}">${name}</a>
    </li>`
}

export default NavLink