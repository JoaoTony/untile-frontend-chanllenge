import { TickerResponse } from "~/types/ticker-card"
import { fetcher } from "./fetcher"

interface Response {name: string, tickers: TickerResponse[]}

export const getCoinsTickers = async (coin_id: string, exchange_id: string) => {
  const response = {
    name: '', 
    tickers: undefined as any as TickerResponse[],
    loading: true,
    errorMessage: ''
  }

  if(!coin_id || !exchange_id) {
    return
  }
  
  try {
    const data = await fetcher.get<Response>(`/coins/${coin_id}/tickers?exchange_ids=${exchange_id}`)

    response.tickers = data?.tickers
    response.name = data?.name
    response.loading = false
    
  } catch (error: any) {
    const res = error?.response
    console.log("erro:", res?.status, res?.data?.error)

    if(res?.status === 404) {
      response.errorMessage = res?.data?.error
    }

    response.loading = false
  }

  return response
}