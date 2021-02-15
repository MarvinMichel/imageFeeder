import DetailSummaryItem from '../atoms/DetailSummaryItem.js'

function DetailSummary(name, likes, downloads) {
  const types = [
    {
      type: 'user',
      value: name
    },
    {
      type: 'likes',
      value: likes
    },
    {
      type: 'downloads',
      value: downloads
    }
  ]

  return `
    <ul class="modal--summary">
      ${types.map(type => DetailSummaryItem({type, value}))}
    </ul>
  `
}

export default DetailSummary