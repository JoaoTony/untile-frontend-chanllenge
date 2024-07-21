import TickersPage from "~/views/tickers";

export default function Home({searchParams}: {searchParams: { coin: string, market: string }}) {
  return <TickersPage searchParams={searchParams} />
}
