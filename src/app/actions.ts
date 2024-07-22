'use server'

import { getCoinsTickers } from "~/services/get-coins-tickers"
import { getConversionBetweenCurrencies } from "~/services/get-conversion-between-currencies"

export async function convertCurrencies(value: number, from: string, to: string) {
  const data = await getConversionBetweenCurrencies(value, from, to)

  return data

}

export async function getTickers(coin: string, market: string) {
  const data = await getCoinsTickers(coin, market)
  
  return data
}

