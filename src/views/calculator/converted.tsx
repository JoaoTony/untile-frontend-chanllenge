import { FC } from "react";

import styles from './calculator.module.css'
import { ConvertedProps } from "./calculator.types";

const Converted: FC<ConvertedProps> = ({ isNew, from, to }) => {
  return (
    <span className={isNew ? styles.new_converted : styles.converted}>
      <strong className={isNew ? styles.new_strong : styles.strong}>
          {from.value}
        <strong className={isNew ? styles.new_unit : styles.unit}>
          {from.unit}
        </strong>
      </strong>
      is worth
      <strong className={isNew ? styles.new_strong : styles.strong}>
        {to.value} 
        <strong className={isNew ? styles.new_unit : styles.unit}>
          {to.unit}
        </strong>
      </strong>
    </span>
  )
}

export default Converted