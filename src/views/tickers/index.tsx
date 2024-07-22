import {FC} from 'react'
import viewStyles from '../views.module.css' 
import { getAllCoins } from '~/services/get-supported-currencies'
import { getExchangesList } from '~/services/get-exchanges-list'
import { TickersPageProps } from './tickers.types'
import TickersPageInteractiveContent from './interactive-content'

const TickersPage: FC<TickersPageProps> = async ({ searchParams }) => {
  const exchangesList = await getExchangesList()
  const coins = await getAllCoins()
 
  return(
    <div className={viewStyles.tickers_and_calculator_container}>
      <span className={viewStyles.title}>TICKERS</span>

      <TickersPageInteractiveContent
        searchParams={searchParams}
        coins={coins}
        markers={exchangesList}
      />
    </div>
  )
}

export default TickersPage