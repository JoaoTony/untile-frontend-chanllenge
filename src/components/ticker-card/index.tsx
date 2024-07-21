import {FC} from 'react'

import styles from './ticker_card.module.css'
import { TickerResponse } from '~/types/ticker-card'
import Link from 'next/link'

const TickerCard: FC<TickerResponse> = (data) => {
  return(
    <div className={styles.container}>
      <div className={styles.column}>
        <span className={styles.title}>{data?.base}/{data?.target}</span>

        <div>
          <div className={styles.row} style={{ marginBottom: 8 }}>
            <span className={styles.label}>Last value:</span>
            <span className={styles.text}>{data?.converted_last?.usd}</span>
            <span className={`${styles.text} ${styles.coin}`}>{'USD'}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Last trade:</span>
            <span className={styles.text}>{data?.last_traded_at},</span>
            <span className={`${styles.text} ${styles.time}`}>{}</span>
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.view_more_wrapper}>
          <Link href={data?.trade_url || ''}>
          <span className={styles.view_more}>View more</span>
          </Link>
        </div>

        <div>
          <div className={`${styles.row} ${styles.align_right}`} style={{ marginBottom: 8}}>
            <span className={styles.right_label}>Market:</span>
            <span className={styles.right_text}>{data?.market?.name}</span>
          </div>
          <div className={`${styles.row} ${styles.align_right}`}>
            <span className={styles.right_label}>Market volume:</span>
            <span className={styles.right_text}>{data?.volume}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TickerCard