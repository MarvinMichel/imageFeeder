// Remove HTML content and children from @parent
function removeContent(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

export { removeContent }