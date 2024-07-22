import { FC, useState } from "react";

import Image from "next/image";
import LARGE_ARROW from '~/assets/arrow-to.svg'

import viewStyles from '../views.module.css' 
import Input from "~/components/input";
import InputSelect from "~/components/input/select";
import Button from "~/components/button";
import { ConvertSectionProps } from "./calculator.types";
import { useRouter } from "next/navigation";
import { PATHS } from "~/constants/paths";

const ConvertSection: FC<ConvertSectionProps> = ({ 
  coins, 
  searchParams, 
  supporteds, 
  handleConvert, 
  loading 
}) => {
  const [value, setValue] = useState(searchParams?.value || '')
  const [from, setFrom] = useState(searchParams?.from || '')
  const [to, setTo] = useState(searchParams?.to || '')

  const router = useRouter()

  return(
    <div className={viewStyles.header_section}>
      <Input
        label="FROM:"
        defaultValue={searchParams?.value || ''}
        onChange={value => {
          setValue(value.target.value)
        }}
      />
      <InputSelect
        value={searchParams?.from || ''}
        data={coins?.map(coin => ({ key: coin.name.toLocaleUpperCase(), value: coin.id}))}
        onChangeOption={opt => {
          setFrom(opt)
          router.push(`/${PATHS.calculator}?value=${value}&from=${opt}&to=${to}`)
        }}
      />

      <Image
        src={LARGE_ARROW}
        alt="large arrw to"
        style={{ marginBottom: 6 }}
      />

      <InputSelect
        label="TO:"
        value={searchParams?.to || ''}
        data={supporteds?.map(item => ({ key: item?.toLocaleUpperCase(), value: item}))}
        onChangeOption={opt => {
          setTo(opt)
          router.push(`/${PATHS.calculator}?value=${value}&from=${from}&to=${opt}`)
        }}
      />

      <Button
        text="Convert"
        onClick={() => handleConvert()}
        disabled={!value || !from || !to || loading} 
      />
    </div>
  )
}

export default ConvertSection