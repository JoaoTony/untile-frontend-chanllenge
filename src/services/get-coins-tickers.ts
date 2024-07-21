import axios from "axios"
import { TickerResponse } from "~/types/ticker-card"

export type GetCoinsTickers = {
  last: number
  volume: any
  converted_last: string
  converted_volume: any
  timestamp: any
  last_traded_at: any
  last_fetch_at: any
}

export const getCoinsTickers = async (coin_id: string, exchange_id: string) => {
  const response = {
    name: '', 
    tickers: undefined as any as TickerResponse[],
    loading: true
  }
  
  try {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin_id}/tickers?exchange_ids=${exchange_id}`)

    const data = res.data as {name: string, tickers: TickerResponse[]}
  
    response.tickers = data?.tickers
    response.name = data?.name
    response.loading = false
    
  } catch (error) {
    console.log("erro:", error)

    response.loading = false
  }

  return response
}