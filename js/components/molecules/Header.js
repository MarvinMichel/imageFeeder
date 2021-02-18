import PageTitle from '../atoms/PageTitle.js'
import SubTitle from '../atoms/SubTitle.js'

function Header() {
  return `
    <header>
      ${PageTitle('ImageFeeder')}
      ${SubTitle('Feed yourself some images')}
    </header>
  `
}

export default Header