import styles from './banner.module.scss'
import bannerDesktopJPG from '@/assets/images/banner.jpg?w=1440&format=jpg&quality=80'
import bannerDesktopAvif from '@/assets/images/banner.jpg?w=1240&format=avif&quality=60'
import bannerDesktopWebP from '@/assets/images/banner.jpg?w=1440&format=webp&quality=80'

import bannerMobileJPG from '@/assets/images/banner-mobile.jpg?w=375&format=jpg&quality=80'
import bannerMobileAvif from '@/assets/images/banner-mobile.jpg?w=375&format=avif&quality=60'
import bannerMobileWebP from '@/assets/images/banner-mobile.jpg?w=375&format=webp&quality=80'

export function initBanner(selector) {
	const root = document.querySelector(selector)
	root.innerHTML = `
		<picture>
			<source srcset="${bannerDesktopAvif}" type="image/avif" media="(min-width: 769px)">
			<source srcset="${bannerDesktopWebP}" type="image/webp" media="(min-width: 769px)">
			<source srcset="${bannerDesktopJPG}" type="image/jpeg" media="(min-width: 769px)">

		
			<source srcset="${bannerMobileAvif}" type="image/avif">
			<source srcset="${bannerMobileWebP}" type="image/webp" )">
			
		
			<img src="${bannerMobileJPG}" alt="Baner" class="${styles.banner}">
		</picture>
  `

}

