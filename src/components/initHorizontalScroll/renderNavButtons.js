import { customButton } from '@/components/button'
import styles from './initHorizontalScroll.module.scss';
import { Icons } from '@/assets/icons/icons.js'

export function renderNavButtons() {
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