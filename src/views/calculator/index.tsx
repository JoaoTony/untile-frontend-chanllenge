import {FC} from 'react'
import styles from './calculator.module.css'
import viewStyles from '../views.module.css' 
import ConvertSection from './convert-section'
import Converted from './converted'

const CalculatorPage: FC = () => {
  return(
    <div className={viewStyles.tickers_and_calculator_container}>
      <span className={viewStyles.title}>Crypto Calculator</span>

      <ConvertSection/>

      <span className={styles.result}>Result</span>

      <Converted isNew/>
      <Converted/>
      <Converted/>
      <Converted/>
    </div>
  )
}

export default CalculatorPage