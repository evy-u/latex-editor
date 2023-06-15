import { el, mount } from 'redom'

export default function OptionsPanel(data: string[], position) {
  document.querySelector('.suggest-option-panel')?.remove()
  const options = data.map(item => {
    return el('div.option-item', item)
  })
  const optionELe = el('div.suggest-option-panel', options, {
    style: {
      display: 'block',
      left: position.left + 'px',
      top: position.top + 'px',
    },
  })
  mount(document.body, optionELe)
}
