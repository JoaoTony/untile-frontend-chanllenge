import { FC } from "react";

import styles from './calculator.module.css'
import { ConvertedProps } from "./calculator.types";

const Converted: FC<ConvertedProps> = ({ isNew }) => {
  return (
    <span className={isNew ? styles.new_converted : styles.converted}>
      <strong className={isNew ? styles.new_strong : styles.strong}>
        1000
        <strong className={isNew ? styles.new_unit : styles.unit}>
          BTC
        </strong>
      </strong>
      is worth
      <strong className={isNew ? styles.new_strong : styles.strong}>
        362 
        <strong className={isNew ? styles.new_unit : styles.unit}>
          ETC
        </strong>
      </strong>
    </span>
  )
}

export default Converted