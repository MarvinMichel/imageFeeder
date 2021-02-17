import Input from '../atoms/Input.js'

function Label(text) {
  return `
    <label>
      <div>${text}</div>
      ${Input('text', 'search')}
    </label>
  `
}

export default Label