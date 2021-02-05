export async function getImageData(endpoint, query) {
  const apiURL = 'https://api.unsplash.com/'
  const apiKey = 'lbhvcWW7O-NY5XERiGF9BrvC2L05e-MWIjagBBsXr9A'

    try {
      const response = await fetch(`${apiURL}${endpoint}?client_id=${apiKey}${query ? `&query=${query}` : ''}`)
      const data = await response.json()
      return console.log(data)
    } catch (err) {
      return console.log('Something went wrong', err)
    }
}