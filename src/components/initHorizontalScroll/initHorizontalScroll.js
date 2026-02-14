import styles from './initHorizontalScroll.module.scss';
import { customButton } from '@/components/button/customButton.js'
import { Icons } from '@/assets/icons/icons.js'

function createNav() {

	return `
    <div class="${styles.right}"> 
      <div class="${styles.nav}">
        ${customButton({ text: `${Icons.left}`, variant: 'nav', className: 'prev' })}
        ${customButton({ text: `${Icons.right}`, variant: 'nav', className: 'next' })}
      </div>
      ${customButton({ text: 'Show all', variant: 'nav', className: 'showAll' })}
    </div>
  `

}

/* ----------------------------------------------------------------------------- */

export function initHorizontalScroll(selector, {
	cards,
	moreCards = null,
	content,
	type = 'default',
	leftHeader = null,
	nav = false,

} = {}) {
	const root = document.querySelector(selector);

	const headerHTML = leftHeader ? `<div class="${styles.left}">${leftHeader}</div>` : '';
	const navHTML = nav ?
		createNav()
		:
		'';
	const moreCardsHTML = moreCards ? `<div class="${styles.cardRow} ${styles.cardRowMobile}">
				${moreCards.map(content).join('')}	
			</div>` : '';

	root.innerHTML = `
    <section  class="${styles.wrapper} ${type === 'first' ? styles.wrapper__first : styles.wrapper__default}">
	 <div class="${styles.header}">${headerHTML}  ${navHTML}</div>
	
		<div class="${styles.scrollContainer}">
			<div class="${styles.cardRow}">
				${cards.map(content).join('')}	
			</div>
			${moreCardsHTML}
		</div>
		
    </section>
  `;

	const scrollEl = root.querySelector(`.${styles.scrollContainer}`);
	const btnPrev = root.querySelector('.prev');
	const btnNext = root.querySelector('.next');

	btnPrev?.addEventListener('click', () => {
		scrollEl.scrollBy({ left: -300, behavior: 'smooth' });
	});

	btnNext?.addEventListener('click', () => {
		scrollEl.scrollBy({ left: 300, behavior: 'smooth' });
	});
}


