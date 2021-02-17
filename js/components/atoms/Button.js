function Button(text, event, type) {
  const button = document.createElement('button')
  button.classList.add('button')
  type === 'submit' ? button.setAttribute('type', type) : null
  button.innerText = text
  event && button.addEventListener('click', event)

  return button
}

export default Button