import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = (q) => {
  const type = 'track'

  return platziMusicService.get('/search', {
    params: { q, type }
  })
    .then(response => response.data)
    .catch(error => console.error(error))
}

export default trackService
