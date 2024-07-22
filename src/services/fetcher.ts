import { api } from "./api"

const get = async <T>(endPoint: string, init?: RequestInit | undefined) => {
  const response = await api(endPoint, init)

  return response.json() as T
}

export const fetcher = { get }
