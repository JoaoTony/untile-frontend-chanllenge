import { FC } from "react";

import Image from "next/image";
import LARGE_ARROW from '~/assets/arrow-to.svg'

import viewStyles from '../views.module.css' 
import Input from "~/components/input";
import InputSelect from "~/components/input/select";
import Button from "~/components/button";

const ConvertSection: FC = () => {
  return(
    <div className={viewStyles.header_section}>
      <Input
        label="FROM:"
      />
      <InputSelect

      />

      <Image
        src={LARGE_ARROW}
        alt="large arrw to"
      />

      <InputSelect
        label="TO:"
      />

      <Button
        text="Convert"
      />
    </div>
  )
}

export default ConvertSection