import {FC} from 'react'
import styles from './tickers.module.css'
import viewStyles from '../views.module.css' 
import SearchSection from './search-section'
import TickersList from './tickers-list'

const fakeList = [
  {
    title: 'BCT/USD',
    lastValue: 9389.09,
    lastTrade: '10 fev 2020',
    time: '14:35',
    market: 'Binance',
    marketVolume: '40260.61307178278',
    coin: 'USD'
  },
  {
    title: 'BCT/USD',
    lastValue: 9389.09,
    lastTrade: '10 fev 2020',
    time: '14:35',
    market: 'Binance',
    marketVolume: '40260.61307178278',
    coin: 'USD'
  }
]

const TickersPage: FC = () => {
  return(
    <div className={viewStyles.tickers_and_calculator_container}>
      <span className={viewStyles.title}>TICKERS</span>

      <SearchSection/>

      <TickersList
        list={fakeList}
      />
    </div>
  )
}

export default TickersPage