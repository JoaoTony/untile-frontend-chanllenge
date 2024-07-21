'use client'
import { FC, useState } from "react";

import viewStyles from '../views.module.css' 
import InputSelect from "~/components/input/select";
import Button from "~/components/button";
import { SearchSectionProps } from "./tickers.types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const SearchSection: FC<SearchSectionProps> = ({ coins, markers, searchParams }) => {
  const [coin, setCoin] = useState(searchParams.coin || '')
  const [market, setMarket] = useState(searchParams.market || '')

  const router = useRouter()
  const getSearchParams = useSearchParams();
  const pathname = usePathname()

  const updateQuery = (path: string, value: string) => {
    const current = new URLSearchParams(Array.from(getSearchParams.entries()))
 
    if (!value) {
      current.delete(path || '');
    } else {
      current.set(path || '', value);
    }
 
    const search = current.toString();
    const query = search ? `?${search}` : '';
 
    router.push(`${pathname}${query}`);
   }

   const handleSendToURLAndSearch = () => {
    router.push(`/tickers?coin=${coin}&market=${market}`)
   }

  return(
    <div className={viewStyles.header_section}>
      <InputSelect
        label="COIN:"
        path="coin"
        data={coins?.map(coin => ({ key: coin.name.toLocaleUpperCase(), value: coin.id}))}
        value={searchParams.coin}
        onChangeOption={opt => setCoin(opt)}
      />

      <InputSelect
        label="MARKET:"
        path="market"
        data={markers?.map(marker => ({ key: marker.name, value: marker.id }))}
        value={searchParams.market}
        onChangeOption={opt => setMarket(opt)}
      />

      <Button
        text="Search"
        onClick={() => handleSendToURLAndSearch()}
        disabled={!coin || !market}
      />
    </div>
  )
}

export default SearchSection