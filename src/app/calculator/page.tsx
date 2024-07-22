import CalculatorPage from "~/views/calculator";
import { SearchParams } from "~/views/calculator/calculator.types";

export default function Home({searchParams} : {searchParams: SearchParams}) {
  return <CalculatorPage searchParams={searchParams}/>
}
