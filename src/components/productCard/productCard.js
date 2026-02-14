import styles from './productCard.module.scss';
import { Icons } from '@/assets/icons/icons.js'
import { customButton } from '@/components/button/customButton.js'
export function productCard({ image, text, title }) {
	return `
	 <article class="${styles.card}">
	 	<div class="${styles.imageWrapper}">
			<img src="${image}" alt="${title}"  width="64" height="48" class="${styles.image}" />
			<div class="${styles.hoverBlock}">
			<div class="${styles.background}"></div>
				  ${customButton({ text: 'Play', variant: 'contained', size: 'lg', className: 'buyBtn1' })}
  					${customButton({ text: 'Demo', variant: 'text', className: 'detailsBtn1' })}
			</div>
		</div>
		<div class="${styles.content}">
			${Icons.parrot}
			<span class="${styles.text}">${text}</span>
		</div>
	 </article>
  `;
}