import { FC, useState } from "react";

import viewStyles from '../views.module.css' 
import InputSelect from "~/components/input/select";
import Button from "~/components/button";
import { SearchSectionProps } from "./tickers.types";
import { useRouter } from "next/navigation";
import { PATHS } from "~/constants/paths";

const SearchSection: FC<SearchSectionProps> = ({ coins, markers, searchParams, handleSearch, loading }) => {
  const [coin, setCoin] = useState(searchParams.coin || '')
  const [market, setMarket] = useState(searchParams.market || '')

  const router = useRouter()

  return(
    <div className={viewStyles.header_section}>
      <InputSelect
        label="COIN:"
        path="coin"
        data={coins?.map(coin => ({ key: coin.symbol.toLocaleUpperCase(), value: coin.id}))}
        value={searchParams.coin}
        onChangeOption={opt => {
          setCoin(opt)
          router.push(`/${PATHS.tickers}?coin=${opt}&market=${market}`)
        }}
      />

      <InputSelect
        label="MARKET:"
        path="market"
        data={markers?.map(marker => ({ key: marker.name, value: marker.id }))}
        value={searchParams.market}
        onChangeOption={opt => {
          setMarket(opt)
          router.push(`/${PATHS.tickers}?coin=${coin}&market=${opt}`)
        }}
      />

      <Button
        text="Search"
        onClick={() => handleSearch && handleSearch()}
        disabled={!coin || !market || loading}
      />
    </div>
  )
}

export default SearchSection