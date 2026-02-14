import styles from './customButton.module.scss';
export function customButton({ text, variant = 'filled', size = 'default', className }) {
	return `<button  class="${styles.button} ${styles[variant]} ${styles[size]} ${className}">${text}</button>`;
}