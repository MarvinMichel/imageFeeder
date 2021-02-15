function DetailSummaryItem(type, data) {
  let className, description;

  if (type === 'user') {
    className = 'gg-user'
    description = 'Photographer:'
  } else if (type === 'likes') {
    className = 'gg-heart'
    description = 'Likes:'
  } else {
    className = 'gg-software-download'
    description = 'Downloads:'
  }

  return `
    <li class="modal--summary__item"><i class=${className}></i>${description} ${data}</li>
  `
}

export default DetailSummaryItem