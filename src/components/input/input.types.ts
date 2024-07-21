import { InputHTMLAttributes, SelectHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export interface SelecttProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  path?: string
  data?: {key: string, value: any}[]
  onChangeOption?: (value: string) => void
}