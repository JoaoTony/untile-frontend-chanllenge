'use client'

import {FC, useState} from 'react'
import styles from './calculator.module.css'
import ConvertSection from './convert-section'
import { ConvertSectionProps } from './calculator.types'
import ConvertedList from './converted-list'
import { convertCurrencies } from '~/app/actions'
import { useConverterHistory } from '~/hooks/useConverterHistory'

const CalculatorPageInteractiveContent: FC<Omit<ConvertSectionProps,  'handleConvert'>> = ({ 
  supporteds, 
  coins, 
  searchParams 
}) => {
  const [result, setResult] = useState<number>()
  const [loading, setLoading] = useState(false)

  const { addConversionToHistory } = useConverterHistory()
  
  const handleConvert = async () => {
    setLoading(true)
    const data = await convertCurrencies(Number(searchParams?.value || ''), searchParams?.from, searchParams?.to)

    setResult(data)
    setLoading(false)

    addConversionToHistory({
      from: {
        value: Number(searchParams.value) || 0,
        unit: searchParams.from
      },
      to: {
        value: result?.toFixed(4) as any as number,
        unit: searchParams.to
      }
    })
  }

  return(
    <>
      <ConvertSection
        supporteds={supporteds}
        coins={coins}
        searchParams={searchParams}
        handleConvert={handleConvert}
        loading={loading}
      />

      <span className={styles.result}>{result ? 'Result' : ''}</span>

      <ConvertedList
        loading={loading}
        newValue={result? {
          from: {
            value: Number(searchParams.value) || 0,
            unit: searchParams.from
          },
          to: {
            value: result?.toFixed(4) as any as number,
            unit: searchParams.to
          }
        }: undefined}
      />
    </>
  )
}

export default CalculatorPageInteractiveContent