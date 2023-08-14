import BigNumber from 'bignumber.js'
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmsPublicDataAsync, fetchPoolsPublicDataAsync, fetchPoolsUserDataAsync } from './actions'
import { State, Farm, Pool } from './types'
import { QuoteToken } from '../config/constants/types'

const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync())
    // dispatch(fetchPoolsPublicDataAsync())
  }, [dispatch, slowRefresh])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)
  console.log('farm: ', farm.userData && farm.userData.stakedBalance)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
  }
}

// Pools

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

// Prices

export const usePriceBnbBusd = (): BigNumber => {
  const pid = 0 // BUSD-BNB LP
  const farm = useFarmFromPid(pid)
  console.log("price ", new BigNumber(0.0000532336).toNumber())
  return farm.tokenPriceVsQuote ? new BigNumber(0.0000532336) : ZERO
}

export const usePriceCakeBusd = (): BigNumber => {
  // const pid = 1 // CAKE-BNB LP
  // const bnbPriceUSD = usePriceBnbBusd()
  // const farm = useFarmFromPid(pid)
  // return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
  const pid = 1 // PUMA-BUSD LP
  const farm = useFarmFromPid(pid)
  //  console.log(farm.tokenPriceVsQuote)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

// export const usePriceBTCBusd = (): BigNumber => {
//   // const pid = 1 // CAKE-BNB LP
//   // const bnbPriceUSD = usePriceBnbBusd()
//   // const farm = useFarmFromPid(pid)
//   // return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
//   const pid = 25 // PUMA-BUSD LP
//   const farm = useFarmFromPid(pid)

//   return farm.btcPrice ? new BigNumber(farm.btcPrice) : ZERO
// }

// export const usePricepBTCBusd = (): BigNumber => {
//   // const pid = 1 // CAKE-BNB LP
//   // const bnbPriceUSD = usePriceBnbBusd()
//   // const farm = useFarmFromPid(pid)
//   // return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
//   const pid = 41 // PUMA-BUSD LP
//   const farm = useFarmFromPid(pid)

//   return farm.pbtcPrice ? new BigNumber(farm.pbtcPrice) : ZERO
// }

// export const usePriceHEXBusd = (): BigNumber => {
//   // const pid = 1 // CAKE-BNB LP
//   // const bnbPriceUSD = usePriceBnbBusd()
//   // const farm = useFarmFromPid(pid)
//   // return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
//   const pid = 26 // PUMA-BUSD LP
//   const farm = useFarmFromPid(pid)

//   return farm.hexPrice ? new BigNumber(farm.hexPrice) : ZERO
// }

// export const usePriceEHEXBusd = (): BigNumber => {
//   // const pid = 1 // CAKE-BNB LP
//   // const bnbPriceUSD = usePriceBnbBusd()
//   // const farm = useFarmFromPid(pid)
//   // return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
//   const pid = 26 // PUMA-BUSD LP
//   const farm = useFarmFromPid(pid)

//   return farm.ehexPrice ? new BigNumber(farm.ehexPrice) : ZERO
// }

export const useTotalValue = (): BigNumber => {
  const farms = useFarms()
  const bnbPrice = usePriceBnbBusd()
  const cakePrice = usePriceCakeBusd()

  // const hexPrice = usePriceHEXBusd()
  // const ehexPrice = usePriceEHEXBusd()
  // const btcPrice = usePriceBTCBusd()
  // const pbtcPrice = usePricepBTCBusd()

  let value = new BigNumber(0)
  for (let i = 0; i < farms.length; i++) {
    const farm = farms[i]
    if (farm.lpTotalInQuoteToken) {
      let val
      if (farm.quoteTokenSymbol === QuoteToken.BNB) {
        val = bnbPrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
        val = cakePrice.times(farm.lpTotalInQuoteToken)
      }
      //  else if (farm.quoteTokenSymbol === QuoteToken.EBTC)
      //  {
      //   val = btcPrice.times(farm.lpTotalInQuoteToken)
      // } else if (farm.quoteTokenSymbol === QuoteToken.PBTC) {
      //   val = pbtcPrice.times(farm.lpTotalInQuoteToken)
      // } else if (farm.quoteTokenSymbol === QuoteToken.PHEX) {
      //   val = hexPrice.times(farm.lpTotalInQuoteToken)
      // } else if (farm.quoteTokenSymbol === QuoteToken.EHEX) {
      //   val = ehexPrice.times(farm.lpTotalInQuoteToken)
      // }
      else {
        val = farm.lpTotalInQuoteToken
      }
      value = value.plus(val)
    }
  }
  return value
}

export const useTotalWalletValue = (): BigNumber => {
  const farms = useFarms()
  const bnbPrice = usePriceBnbBusd()
  const cakePrice = usePriceCakeBusd()
  // const btcPrice = usePriceBTCBusd()
  // const pHexPrice = usePriceHEXBusd()
  // const pbtcPrice = usePricepBTCBusd()

  // Generate array of userFarm data
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userFarms = farms.map((farm, i) => useFarmUser(i))

  let value = new BigNumber(0)

  for (let i = 0; i < userFarms.length; i++) {
    const userFarm = userFarms[i]
    const farm = farms[i]
    if (userFarm && farm && farm.lpTotalInQuoteToken) {
      let val

      if (userFarm.stakedBalance > new BigNumber(0)) {
        // first get the total tokens in the pool
        const decimalsToUse = farm.isTokenOnly ? new BigNumber(farm.farmTokenDecimals) : new BigNumber(18)

        const totalPoolTokens = new BigNumber(farm.tokenAmount).multipliedBy(
          new BigNumber(10).pow(new BigNumber(decimalsToUse)),
        )

        // now figure out how much ratio the user owns of the pool
        // const userRatio = new BigNumber(farm.userData.stakedBalance).dividedBy(totalPoolTokens)

        let userRatio = new BigNumber(0)
        if (!totalPoolTokens.isEqualTo(0)) {
          userRatio = new BigNumber(farm.userData.stakedBalance).dividedBy(totalPoolTokens)
        }

        // figure out stake by taking total number / stake

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          // get total $ value of pool
          val = bnbPrice.times(new BigNumber(farm.lpTotalInQuoteToken))
        } else if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
          val = cakePrice.times(new BigNumber(farm.lpTotalInQuoteToken))
        }
        // else if (farm.quoteTokenSymbol === QuoteToken.EBTC) {
        //   val = btcPrice.times(new BigNumber(farm.lpTotalInQuoteToken))
        // } else if (farm.quoteTokenSymbol === QuoteToken.PHEX) {
        //   val = pHexPrice.times(new BigNumber(farm.lpTotalInQuoteToken))
        // } else if (farm.quoteTokenSymbol === QuoteToken.PBTC) {
        //   val = pbtcPrice.times(new BigNumber(farm.lpTotalInQuoteToken))
        // }
        else {
          val = new BigNumber(farm.lpTotalInQuoteToken)
        }
        val = val.times(userRatio)
        value = value.plus(val)
      }
    }
  }
  return value
  // .dividedBy(new BigNumber(10).pow(new BigNumber(3)))
}
