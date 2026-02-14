import styles from './modal.module.scss'
import { productCard } from '@components/productCard/productCard.js'
import { inputField } from '@components/inputField/inputField.js'
import { Icons } from '@/assets/icons/icons.js'

export function initModal() {
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
          <div class="${styles.modalCards}"></div>
        </div>
      </div>
    </div>
  `

	const modal = root.querySelector(`.${styles.modal}`)
	const closeBtn = modal.querySelector(`.${styles.modalClose}`)
	const cardsContainer = modal.querySelector(`.${styles.modalCards}`)
	const inputWrapper = modal.querySelector(`.${styles.inputWrapper}`)

	let allCards = []

	function renderCards(cards) {
		cardsContainer.innerHTML = cards.map(productCard).join('')
	}


	const searchInput = inputField({
		onChange: value => {
			const query = value.toLowerCase().trim()
			const filtered = allCards.filter(card =>
				card.title.toLowerCase().includes(query)
			)
			renderCards(filtered)
		}
	})

	inputWrapper.appendChild(searchInput)

	function open(cards = []) {
		allCards = cards
		renderCards(cards)
		modal.classList.add(styles.show)
	}

	function close() {
		modal.classList.remove(styles.show)
	}

	closeBtn.addEventListener('click', close)
	modal.addEventListener('click', e => {
		if (e.target === modal) close()
	})

	return { open, close }
}
