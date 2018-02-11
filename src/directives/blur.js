const blur = {}

function setBlur (el, binding) {
  el.style.filter = !binding.value ? 'blur(3px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('button').forEach((item) => {
    if (!binding.value) {
      item.setAttribute('disabled', true)
    } else {
      item.removeAttribute('disabled')
    }
  })
}

blur.install = (Vue) => {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
