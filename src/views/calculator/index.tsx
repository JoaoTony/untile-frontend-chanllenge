import {FC} from 'react'
import styles from './calculator.module.css'
import Input from '~/components/input'
import InputSelect from '~/components/input/select'
import Button from '~/components/button'
import TickerCard from '~/components/ticker-card'

const data = [
  {key: 'ETH', value: 'eth'},
  {key: 'BTC', value: 'btc'},
  {key: 'SCR', value: 'scr'}
]

const CalculatorPage: FC = () => {
  return(
    <div className={styles.container}>
      <span className={styles.title}>Crypto Calculator</span>

      <Input
        placeholder='Value'
        type='number'
        label='FROM'
      />
      <InputSelect
        label='TO'
        data={data}
      />

      <Button
        text='Convert'
      />

      <TickerCard />

    </div>
  )
}

export default CalculatorPage