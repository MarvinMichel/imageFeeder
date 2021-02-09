function searchKeyword() {
  
  router.resolve('/search').then(feed => feedContainer.innerHTML = feed)
}

export default searchKeyword