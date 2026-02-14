import styles from './modal.module.scss'
import { Icons } from '@/assets/icons/icons.js'


export function createModal() {
	const root = document.getElementById('modal-root')

	root.innerHTML = `
    <div class="${styles.modal}">
      <div class="${styles.modalContent}">
        <div class="${styles.modal__header}">
          <h2 class="${styles.modal__title}">Search</h2>
          <button class="${styles.modalClose}">${Icons.close}</button>
        </div>
        <div class="${styles.content}">
          <p class="${styles.modal__text}">
            Enter the game title in the search below
          </p>
          <div class="${styles.inputWrapper}"></div>
			  <h3 class="${styles.cardTitle}">Top games</h3>
			  <p class="${styles.notResult}"></p>
          <div class="${styles.modalCards}"></div>
        </div>
      </div>
    </div>
  `

	const modal = root.querySelector(`.${styles.modal}`)
	const closeBtn = modal.querySelector(`.${styles.modalClose}`)
	const cardsContainer = modal.querySelector(`.${styles.modalCards}`)

	const inputWrapper = modal.querySelector(`.${styles.inputWrapper}`)
	const notResult = modal.querySelector(`.${styles.notResult}`)


	return {
		modal,
		inputWrapper,
		cardsContainer,
		notResult,
		closeBtn
	}
}