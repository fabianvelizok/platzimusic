const msToMm = {}

function convertMsToMm (ms) {
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000 / 1000).toFixed(0))

  return `${minutes}:${(seconds < 10) ? '0' + seconds : seconds}`
}

msToMm.install = (Vue) => {
  Vue.filter('ms-to-mm', (val) => {
    return convertMsToMm(val)
  })
}

export default msToMm
