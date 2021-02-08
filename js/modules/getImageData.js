export async function getImageData(endpoint, query) {
  const apiURL = 'https://api.unsplash.com/'
  const apiKey = 'lbhvcWW7O-NY5XERiGF9BrvC2L05e-MWIjagBBsXr9A'
  const fetchURL = `${apiURL}${endpoint}?client_id=${apiKey}${query ? `&query=${query}` : ''}`

    try {
      const response = await fetch(fetchURL)
      const data = await response.json()
      return data
    } catch (err) {
      return console.log('Something went wrong', err)
    }
}