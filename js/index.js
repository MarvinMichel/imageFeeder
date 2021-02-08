import Feed from './components/organisms/Feed.js'

(async function () {
  const feedContainer = document.querySelector('.feed')
  let feedData = await Feed()
  feedContainer.innerHTML = feedData
  
  const latestTab = document.querySelector('nav li:nth-child(2)')
  latestTab.addEventListener('click', async() => {
    feedData = await Feed('&order_by=popular')
    feedContainer.innerHTML = feedData
  })
})()