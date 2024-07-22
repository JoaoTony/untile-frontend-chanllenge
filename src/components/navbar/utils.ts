import { PATHS } from '~/constants/paths'
import styles from './navbar.module.css'

export const NAV_LINKS = [
  {
    url: `/${PATHS.calculator}`,
    label: 'Crypto Calculator'
  },
  {
    url: `/${PATHS.tickers}`,
    label: 'Tickers'
  }
]

export const selectedStyle = (isSelected: boolean) => isSelected ? styles.active_li : styles.li
