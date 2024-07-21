import { FC } from "react";

import styles from './button.module.css'
import { ButtonProps } from "./button.types";

const Button: FC<ButtonProps> = props => {
  const { text } = props

  return(
    <button 
      className={styles.container}
      {...props}
    >
      <span className={styles.text}>{text}</span>
    </button>
  )
}

export default Button