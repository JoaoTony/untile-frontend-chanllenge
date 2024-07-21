import { FC } from "react";

import viewStyles from '../views.module.css' 
import InputSelect from "~/components/input/select";
import Button from "~/components/button";

const SearchSection: FC = () => {
  return(
    <div className={viewStyles.header_section}>
      <InputSelect
        label="COIN:"
      />

      <InputSelect
        label="MARKET:"
      />

      <Button
        text="Search"
      />
    </div>
  )
}

export default SearchSection