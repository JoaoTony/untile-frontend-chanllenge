import {FC} from 'react'
import styles from './tickers.module.css'
import viewStyles from '../views.module.css' 
import SearchSection from './search-section'
import TickersList from './tickers-list'
import { getSupportedCurrencies } from '~/services/get-supported-currencies'
import { getExchangesList } from '~/services/get-exchanges-list'
import { getCoinsTickers } from '~/services/get-coins-tickers'

interface TickersPageProps {
  searchParams: { coin: string, market: string }
}

const TickersPage: FC<TickersPageProps> = async ({ searchParams }) => {
  const exchangesList = await getExchangesList()
  const supportedCurrences = await getSupportedCurrencies()

  const data = await getCoinsTickers(searchParams.coin, searchParams.market)

  return(
    <div className={viewStyles.tickers_and_calculator_container}>
      <span className={viewStyles.title}>TICKERS</span>

      <SearchSection
        coins={supportedCurrences}
        markers={exchangesList}
        searchParams={searchParams}
      />

      <TickersList
        list={data?.tickers}
      />
    </div>
  )
}

export default TickersPage