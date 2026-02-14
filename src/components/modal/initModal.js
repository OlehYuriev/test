import { inputField } from '@components/inputField'
import { createModal } from './createModal.js'
import { renderCards } from './renderCards.js'
import { debounce } from '@/utils/debounce.js'
import styles from './modal.module.scss'

export function initModal() {
	const { inputWrapper, cardsContainer, notResult, modal, closeBtn } = createModal()
	const body = document.querySelector('body')
	let allCards = [];

	const { wrapper: searchInput, input } = inputField({
		onChange: debounce(value => {
			const query = value.toLowerCase().trim();

			const filtered = allCards.filter(card =>
				card.title.toLowerCase().includes(query)
			);

			renderCards(filtered, cardsContainer, notResult)
		}, 500)
	});

	function open() {
		modal.classList.add(styles.show)
		body.style.overflow = 'hidden'
	}

	function close() {
		input.value = ''
		modal.classList.remove(styles.show)
		body.style.overflow = 'auto'
	}

	closeBtn.addEventListener('click', close)

	modal.addEventListener('click', e => {
		if (e.target === modal) close()
	})

	inputWrapper.appendChild(searchInput)

	function show(cards = []) {
		allCards = cards
		renderCards(cards, cardsContainer, notResult)
		open()
	}

	return { show, close }
}
