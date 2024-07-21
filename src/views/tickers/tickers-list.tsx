import { FC } from "react";
import { TickersListProps } from "./tickers.types";
import TickerCard from "~/components/ticker-card";

import styles from './tickers.module.css'

const TickersList: FC<TickersListProps> = ({ list }) => {
  return(
    <div className={styles.tickers_list}>
      {list.map(item => (
        <TickerCard {...item} />  
      ))}
    </div>
  )
}

export default TickersList