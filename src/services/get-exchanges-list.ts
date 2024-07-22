import { fetcher } from "./fetcher"

type Response = {id: string, name: string}[]

export const getExchangesList = async () => {
  try {
    const data = await fetcher.get<Response>('/exchanges/list', { next: { revalidate: 60 * 5} })
   
    return data
  } catch (error) {
    return
  }

}