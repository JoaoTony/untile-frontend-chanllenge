'use client'
import {FC, useState, useEffect} from 'react'

import Image from 'next/image'

import ARROW_DOWN  from '~/assets/select-arrow-down.svg'

import styles from './input.module.css'
import { SelecttProps } from './input.types'

const InputSelect: FC<SelecttProps> = props => {
  const { label, data, onChangeOption, path, value } = props

  const [open, setIsOpen] = useState(false)
  const [selected, setSelected] = useState({
    key: '',
    value: ''
  })

  const onChangeValue = (key: string) => {
    onChangeOption && onChangeOption(key)
  }

  useEffect(() => {
    if(value) {
      const getSelected = data?.find(item => item.value === value)
      
      if(getSelected) {
        setSelected(getSelected)
      }
    }
  }, [value])

  return(
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>{label}</label>
      )}
     
      <button 
        className={styles.select}
        onClick={() => setIsOpen(prev => !prev)}
        onBlur={() => setIsOpen(false)}
      >
        <span className={styles.selected}>{selected?.key}</span>
      <div className={styles.select_affow}>

        <Image src={ARROW_DOWN} alt="" />
      </div>

      {
        open && (
          <div className={styles.select_content}>
            {data?.map((option, index) => (
              <div 
                className={styles.select_content_item}
                key={`${option.key}-${index}`}
                onClick={() => {
                  onChangeValue(option.value)
                  setSelected(option)
                }}
              >
                {option.key}
              </div>
            ))}
          </div>
        )
      }
     </button>   
    </div>
  )
}

export default InputSelect