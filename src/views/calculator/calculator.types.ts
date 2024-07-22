import { SupportedCurrencies } from "~/types/coins"

export type SearchParams = { value: string, from: string, to: string }

export interface CalculatorPageProps {
  searchParams: SearchParams
}

export type FromOrTo = {
  value: number,
  unit: string
}

export type ConvertedHistory = {
  from: FromOrTo,
  to: FromOrTo
}

export type ConvertedProps = {
  isNew?: boolean 
} & ConvertedHistory

export type ConvertSectionProps = {
  coins?: SupportedCurrencies[]
  supporteds?: string[]
  searchParams: SearchParams
  handleConvert: () => Promise<void>
  loading?: boolean
}

export interface ConvertedListProps {
  newValue?: ConvertedHistory
  loading: boolean
}