import styles from './inputField.module.scss'
import { Icons } from '@/assets/icons/icons.js'

export function inputField({ onChange }) {
	const wrapper = document.createElement('label')
	wrapper.className = styles.label

	wrapper.innerHTML = `
    <span class="${styles.helper}">helper label</span>
    <div class="${styles.container}">
	 	<span class="${styles.icon}">${Icons.search}</span>
      <input type="text" placeholder="Search" class="${styles.input}" />
      <button class="${styles.close}">${Icons.close}</button>
    </div>
  `

	const input = wrapper.querySelector('input')
	const clearBtn = wrapper.querySelector('button')

	input.addEventListener('input', () => {
		onChange?.(input.value)
	})

	clearBtn.addEventListener('click', () => {
		input.value = ''
		onChange?.('')
		input.focus()
	})

	return { wrapper, input }
}
