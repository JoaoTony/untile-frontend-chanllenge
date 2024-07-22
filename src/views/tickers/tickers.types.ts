import { SupportedCurrencies } from "~/types/coins";
import { TickerResponse } from "~/types/ticker-card";

export interface TickersListProps {
  list?: TickerResponse[] 
  loading: boolean
}

export interface TickersPageProps {
  searchParams: { coin: string, market: string }
}

export type SearchSectionProps = {
  coins?: SupportedCurrencies[]
  markers?: {id: string, name: string}[]
  searchParams: { coin?: string, market?: string }
  handleSearch?: () => Promise<void>
  loading?: boolean
}