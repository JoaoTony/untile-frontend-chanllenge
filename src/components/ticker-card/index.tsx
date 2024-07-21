import {FC} from 'react'

import styles from './ticker_card.module.css'

export type TickerCardProps = {
  title: string
  lastValue: number
  lastTrade: string
  time: string
  market: number
  marketVolume: string
}

const TickerCard: FC<TickerCardProps> = ({title, lastTrade, lastValue, time, market, marketVolume}) => {
  return(
    <div className={styles.container}>
      <div className={styles.column}>
        <span className={styles.title}>{title}</span>

        <div>
          <div className={styles.row} style={{ marginBottom: 8 }}>
            <span className={styles.label}>Last value:</span>
            <span className={styles.text}>{lastValue}</span>
            <span className={`${styles.text} ${styles.coin}`}>USD</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Last trade:</span>
            <span className={styles.text}>{lastTrade},</span>
            <span className={`${styles.text} ${styles.time}`}>{time}</span>
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.view_more_wrapper}>
          <span className={styles.view_more}>View more</span>
        </div>

        <div>
          <div className={`${styles.row} ${styles.align_right}`} style={{ marginBottom: 8}}>
            <span className={styles.right_label}>Market:</span>
            <span className={styles.right_text}>{market}</span>
          </div>
          <div className={`${styles.row} ${styles.align_right}`}>
            <span className={styles.right_label}>Market volume:</span>
            <span className={styles.right_text}>{marketVolume}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TickerCard