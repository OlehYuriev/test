import './styles/main.scss'
import { initHeader } from './components/header'
import { initBanner } from './components/banner'
import { initHorizontalScroll } from './components/initHorizontalScroll'
import { card } from './components/card'
import { productCard } from './components/productCard'
import { cardData } from './data/cardData.js'
import { productData } from './data/productData.js'
import { topGameData } from './data/topGameData.js'
import { customButton } from '@/components/button/customButton.js'
import { debounce } from '@/utils/debounce.js'

initHeader('#header-root')
initBanner('#banner')

initHorizontalScroll('#card', {
	cards: cardData,
	content: card,
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
	content: productCard,
	type: 'first',
	leftHeader: `<h2>Top games</h2>`,
	nav: true
});

function initScrolls() {

	if (window.innerWidth < 992) {
		initHorizontalScroll('#productMore', {
			cards: topGameData.slice(5, 10),
			content: productCard,
			type: 'none',
		});

		initHorizontalScroll('#product3', {
			cards: productData,
			content: productCard,
			type: 'first',
			leftHeader: `<h2>Mini games</h2>`,
			nav: true
		});
	}
}


initScrolls();


window.addEventListener('resize', debounce(() => {
	initScrolls();
}, 200));