import { useCookies } from 'next-client-cookies';
import { COOKIES_KEYS } from '~/constants/cookies-keys';
import { ConvertedHistory } from '~/views/calculator/calculator.types';

export const useConverterHistory = () => {
  const cookies = useCookies()

  const converterHistory = cookies.get(COOKIES_KEYS.CONVERTER_HISTORY)

  const currentHistory = (converterHistory ? JSON.parse(converterHistory?.toString() || '') : []) as ConvertedHistory[]
  
  const addConversionToHistory = (newValue: ConvertedHistory) => {
    const newHistory = [newValue, ...currentHistory]
    
    cookies.set(
      COOKIES_KEYS.CONVERTER_HISTORY,
      JSON.stringify(newHistory),
      {
        path: '/',
      }
    )
  }

  return {
    currentHistory,
    addConversionToHistory
  }
}