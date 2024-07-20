import styles from './navbar.module.css'

export const NAV_LINKS = [
  {
    url: '/calculator',
    label: 'Crypto Calculator'
  },
  {
    url: '/tickers',
    label: 'Tickers'
  }
]

export const selectedStyle = (isSelected: boolean) => isSelected ? styles.active_li : styles.li
