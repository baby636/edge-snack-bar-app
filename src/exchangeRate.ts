import { asNumber, asObject, asOptional, asString } from 'cleaners'

import config from '../config.json'

export interface CurrencyOption {
  address: string
  currencyName: string
  coinCapCurrencyName: string
}

const asPriceUsd = asObject({
  priceUsd: asString
})

const asCoinCapResponse = asObject({
  data: asOptional(asPriceUsd),
  error: asOptional(asString),
  timestamp: asNumber
})

const uri: string = config.coinCapUri
export const currencies: { [key: string]: CurrencyOption } = config.currencies

export const fetchExchangeRates = async (): Promise<{
  [key: string]: number
}> => {
  // Create an arry of promises
  const promisesArr = Object.keys(currencies).map(async currencyCode => {
    const currencyData = currencies[currencyCode]
    try {
      const response = await fetch(uri + currencyData.coinCapCurrencyName)
      const json = asCoinCapResponse(await response.json())
      const errorMsg =
        json.error ?? `Invalid USD price data for ${currencyCode}`
      const priceUsdStr = json.data?.priceUsd ?? ''

      // Check if the response was successful or if the USD price is a valid number
      if (!response.ok || isNaN(parseFloat(priceUsdStr))) {
        throw new TypeError(
          `status code: ${response.status}, error: ${errorMsg}, timestamp: ${json.timestamp}`
        )
      }

      return { [currencyCode]: 1 / +priceUsdStr }
    } catch (e) {
      console.log(e)
    }
  })

  // Resolve array of promises for exchange rates
  const rates = await Promise.all(promisesArr)
  const exchangeRatesObj = {}
  for (const rate of rates) {
    if (rate === undefined) continue
    Object.assign(exchangeRatesObj, rate)
  }
  return exchangeRatesObj
}
