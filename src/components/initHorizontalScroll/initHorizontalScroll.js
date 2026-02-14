import styles from './initHorizontalScroll.module.scss';
import { renderNavButtons } from "./renderNavButtons.js";


export function initHorizontalScroll(selector, {
	cards,
	content,
	type = 'default',
	leftHeader = null,
	nav = false,
	containerSize = 'lg',
} = {}) {
	const root = document.querySelector(selector);

	const headerHTML = leftHeader ? `<div class="${styles.left}">${leftHeader}</div>` : '';

	const navHTML = nav ?
		renderNavButtons()
		:
		'';

	root.innerHTML = `
    <section  class="${styles.wrapper} ${type === 'none' ? '' : type === 'first' ? styles.wrapper__first : styles.wrapper__default}">
	 <div class="${styles.header}">${headerHTML}  ${navHTML}</div>
	
		<div class="${styles.scrollContainer} ${styles[containerSize]}">
				${cards.map(content).join('')}	
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


