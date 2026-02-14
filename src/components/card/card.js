import styles from './card.module.scss';

export function card({ title, image, price, name }) {
	return `
    <article class="${styles.card}">
				<img src="${image}" alt="${title}"  width="64" height="48" class="${styles.image}" />
				<div class="${styles.content}">
					<p class="${styles.title}">${title}</p>
					<span class="${styles.price}">${price}</span>
						<span class="${styles.name}">${name}</span>
				</div>
    </article>
  `;
}