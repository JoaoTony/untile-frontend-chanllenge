'use client'

import {FC, useState} from 'react' 
import SearchSection from './search-section'
import TickersList from './tickers-list'

import { SearchSectionProps } from './tickers.types'
import { TickerResponse } from '~/types/ticker-card'
import { getTickers } from '~/app/actions'

const TickersPageInteractiveContent: FC<SearchSectionProps> = ({ searchParams, coins, markers }) => {
  const [tickers, setTickers] = useState<TickerResponse[]>()
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    setLoading(true)
    const data = await getTickers(searchParams?.coin || '', searchParams?.market || '')

    setTickers(data?.tickers)
    setLoading(false)
  }

  return(
    <>
      <SearchSection
        coins={coins}
        markers={markers}
        searchParams={searchParams}
        handleSearch={handleSearch}
        loading={loading}
      />

      <TickersList
        list={tickers}
        loading={loading}
      />
    </>
  )
}

export default TickersPageInteractiveContent