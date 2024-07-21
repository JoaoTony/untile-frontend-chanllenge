import { SupportedCurrencies } from "~/types/coins"

export const getAllCoins = async () => {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/list')

    return await res.json() as SupportedCurrencies[]
  } catch (error) {
    console.log(error)
  }
}

export const getSupportedCurrencies = async () => {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')

    const allCoins = await getAllCoins() 

    let supporteds = await res.json() as string[]

    return allCoins?.filter(coin => supporteds?.find(supported => supported === coin.symbol) );

  } catch (error) {
    console.log(error)
  }
}