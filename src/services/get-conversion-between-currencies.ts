import { fetcher } from "./fetcher"

export const getConversionBetweenCurrencies = async (value: number, coin_id: string, vs_currencie: string) => {
  if(!value || !coin_id || !vs_currencie) {
    return
  }

  try {
    const data = await fetcher.get<any>(`/simple/price?ids=${coin_id}&vs_currencies=${vs_currencie}`)
  
    const valueMultiliedByOne = data && typeof data === 'object'  ? data[coin_id][vs_currencie] : 0

    const result = (Number(value || 0) * (valueMultiliedByOne || 1))

    return result as number
  } catch (error) {
    console.log(error)
  }
}