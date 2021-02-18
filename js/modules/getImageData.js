async function getImageData(endpoint = 'photos', param) {
  const apiURL = 'https://api.unsplash.com/'
  const apiKey = 'lbhvcWW7O-NY5XERiGF9BrvC2L05e-MWIjagBBsXr9A'
  const fetchURL = `${apiURL}${endpoint}?client_id=${apiKey}&per_page=35${param ? `${param}` : ''}`

  try {
    const response = await fetch(fetchURL)
    let data = await response.json()
    if (endpoint === 'search/photos') data = data.results
    return data
  } catch (err) {
    return console.log('Something went wrong', err)
  }
}

export { getImageData }