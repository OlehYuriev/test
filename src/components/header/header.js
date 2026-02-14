import styles from './header.module.scss'
import { Icons } from '@/assets/icons/icons.js'
import { topGameData } from '@/data/topGameData.js'
import { initModal } from '../modal/modal.js'

export function initHeader(selector) {
	const root = document.querySelector(selector)

	root.innerHTML = `
    <div class="container ${styles.header}">
      <div class="${styles.logo}">Logo</div>
    
      <button class="${styles.search} header__search">${Icons.search}</button>
    </div>
  `



	document.addEventListener('DOMContentLoaded', () => {
		const modalController = initModal()


		const searchBtn = root.querySelector('.header__search')
		searchBtn.addEventListener('click', () => {
			modalController.open(topGameData)
		})
	})
}