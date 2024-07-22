import {FC} from 'react'
import viewStyles from '../views.module.css' 
import { getAllCoins, getAllSupportedVsCurrencies } from '~/services/get-supported-currencies'
import { CalculatorPageProps } from './calculator.types'
import CalculatorPageInteractiveContent from './interactive-content'

const CalculatorPage: FC<CalculatorPageProps> = async ({ searchParams }) => {
  const supportedCurrences = await getAllSupportedVsCurrencies()
  const coins = await getAllCoins()

  return(
    <div className={viewStyles.tickers_and_calculator_container}>
      <span className={viewStyles.title}>Crypto Calculator</span>

      <CalculatorPageInteractiveContent
        supporteds={supportedCurrences}
        coins={coins}
        searchParams={searchParams}
        />
    </div>
  )
}

export default CalculatorPage