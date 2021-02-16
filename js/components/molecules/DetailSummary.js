import DetailSummaryItem from '../atoms/DetailSummaryItem.js'

function DetailSummary(name, likes, downloads, link) {
  const types = [
    {
      id: 'user',
      value: name,
      url: link
    },
    {
      id: 'likes',
      value: likes
    },
    {
      id: 'downloads',
      value: downloads
    }
  ]

  return `
    <ul class="modal--content__summary">
      ${types.map(type => DetailSummaryItem(type)).join('')}
    </ul>
  `
}

export default DetailSummary