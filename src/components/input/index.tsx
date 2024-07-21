import {FC} from 'react'

import styles from './input.module.css'
import { InputProps } from './input.types'

const Input: FC<InputProps> = props => {
  const { label } = props

  return(
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>{label}</label>
      )}
      <input 
        className={styles.container}
        {...props}
      />
    </div>
  )
}

export default Input