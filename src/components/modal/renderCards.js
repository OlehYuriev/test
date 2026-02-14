import { productCard } from '@components/productCard/productCard.js'

export function renderCards(cards, cardsContainer, notResult) {
	cardsContainer.innerHTML = ''
	notResult.textContent = ''
	if (cards.length === 0) {
		notResult.textContent = 'No results found'
		return
	}
	cardsContainer.innerHTML = cards.map(productCard).join('')
}