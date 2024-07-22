import { FC } from "react";
import { TickersListProps } from "./tickers.types";
import TickerCard from "~/components/ticker-card";

import styles from './tickers.module.css'
import { Loader } from "~/components/loader";

const TickersList: FC<TickersListProps> = ({ list, loading }) => {
  return(
    <div className={styles.tickers_list}>
      {loading && (
        <Loader/>
      )}

      {!loading && list?.map((item, index) => (
        <TickerCard {...item}  key={`${index}-${item.trade_url}`}/>  
      ))}

      {!loading && !list?.length && (
        <span>
          Sem ticker
        </span>
      )}
    </div>
  )
}

export default TickersList