function DetailSummaryItem({ id, value: data }) {
  let className, description;

  if (id === 'user') {
    className = 'gg-user'
    description = 'Photographer:'
  } else if (id === 'likes') {
    className = 'gg-heart'
    description = 'Likes:'
  } else {
    className = 'gg-software-download'
    description = 'Downloads:'
  }

  return `
    <li class="modal--content__summary--item"><i class=${className}></i>${description} ${data}</li>
  `
}

export default DetailSummaryItem