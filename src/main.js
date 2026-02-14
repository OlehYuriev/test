import './styles/main.scss'
import { initHeader } from './components/header/header.js'
import { initBanner } from './components/banner/banner.js'
import { initHorizontalScroll } from './components/initHorizontalScroll/initHorizontalScroll.js'
import { card } from './components/card/card.js'
import { productCard } from './components/productCard/productCard.js'
import { cardData } from './data/cardData.js'
import { productData } from './data/productData.js'
import { topGameData } from './data/topGameData.js'
import { customButton } from '@/components/button/customButton.js'

initHeader('#header-root')
initBanner('#banner')

initHorizontalScroll('#card', {
	cards: cardData,
	content: card
});

initHorizontalScroll('#product', {
	cards: productData,
	content: productCard,
	type: 'first',
	leftHeader: `
    ${customButton({ text: `Recent`, variant: 'outlined', className: 'btn' })}
    ${customButton({ text: `Favourite`, variant: 'text', className: 'btn' })}
  `,
	nav: true
});


initHorizontalScroll('#product2', {
	cards: topGameData.slice(0, 5),
	moreCards: topGameData.slice(5),
	content: productCard,
	type: 'first',
	leftHeader: `<h2>Top games</h2>`,
	nav: true
});

if (window.innerWidth < 992) {
	initHorizontalScroll('#product3', {
		cards: productData,
		content: productCard,
		type: 'first',
		leftHeader: `<h2>Mini games</h2>`,
		nav: true
	});
}