export const getExchangesList = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/exchanges/list')

  return await res.json() as {id: string, name: string}[]
}