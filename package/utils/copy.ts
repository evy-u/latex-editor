export function copyByContent(content: string) {
  return new Promise<void>((resolve, reject) => {
    try {
      const elInput = document.createElement('input')
      elInput.setAttribute('value', content + '')
      document.body.appendChild(elInput)
      elInput.select()
      document.execCommand('copy')
      setTimeout(() => {
        document.body.removeChild(elInput)
        resolve()
      }, 0)
    } catch (error) {
      reject(error)
    }
  })
}
