'use client'
import { FC, useEffect } from "react";

import Converted from "./converted";
import { ConvertedListProps } from "./calculator.types";
import { useConverterHistory } from "~/hooks/useConverterHistory";
import { Loader } from "~/components/loader";

const ConvertedList: FC<ConvertedListProps> = ({ newValue, loading }) => {
  const { currentHistory } = useConverterHistory()

  const listToShow = newValue?.from.value ? currentHistory.filter((_, index) => index !== 0) : currentHistory
  
  return(
    <>
      {!!newValue?.to && !loading && (
        <Converted 
          isNew
          from={newValue.from}
          to={newValue.to}
        />
      )}

      {loading && (
        <div style={{ padding: 20 }}>
          <Loader/>
        </div>
      )}
      
      {listToShow?.map((item, index) => (
        <Converted 
          key={`${item.from.unit}-${index}`}
          from={item.from}
          to={item.to}
        />
      ))}

    </>
  )
}

export default ConvertedList