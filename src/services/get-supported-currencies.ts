import { SupportedCurrencies } from "~/types/coins"
import { fetcher } from "./fetcher"

export const getAllCoins = async () => {
  try {
    const data = await fetcher.get<SupportedCurrencies[]>('/coins/list', { next: { revalidate: 60 * 3 } })
    
    return (data as any)?.status?.error_code ? [] : data
  } catch (error) {
    console.log(error)
  }

  return []
}

export const getAllSupportedVsCurrencies = async () => {
  try {
    const res = await fetcher.get<string[]>('/simple/supported_vs_currencies', { next: { revalidate: 60 } })
  
    const data = res?.sort()

    return (data as any)?.status?.error_code ? [] : data
  } catch (error) {
    console.log(error)
    
  }
}