import { el, mount } from 'redom'

export default function OptionsPanel(data: string[]) {
  document.querySelector('.option-panel')?.remove()
  const options = data.map(item => {
    return el('div.option-item', item)
  })
  return mount(document.body, el('div.option-panel', options))
}
