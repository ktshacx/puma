import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import farmsConfig from 'config/constants/farms'
import { getMasterChefAddress } from 'utils/addressHelpers'
import {
  useFarmUser,
  useFarms,
  // usePriceBTCBusd,
  usePriceBnbBusd,
  usePriceCakeBusd,
  // usePricepBTCBusd,
} from 'state/hooks'
import { QuoteToken } from 'config/constants/types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const fetchFarmUserAllowances = async (account: string) => {
  const masterChefAdress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.tokenAddresses[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address: lpContractAddress,
      name: 'allowance',
      params: [account, masterChefAdress],
    }
  })

  const rawLpAllowances = await multicall(erc20ABI, calls)
  const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })
  return parsedLpAllowances
}

export const fetchFarmUserTokenBalances = async (account: string) => {
  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.tokenAddresses[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances = await multicall(erc20ABI, calls)
  const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  return parsedTokenBalances
}

export const fetchFarmUserStakedBalances = async (account: string) => {
  const masterChefAdress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: masterChefAdress,
      name: 'userInfo',
      params: [farm.pid, account],
    }
  })

  const rawStakedBalances = await multicall(masterchefABI, calls)
  const parsedStakedBalances = rawStakedBalances.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  return parsedStakedBalances
}

export const useTotalWalletValue = (): BigNumber => {
  const farms = useFarms()
  const bnbPrice = usePriceBnbBusd()
  const cakePrice = usePriceCakeBusd()
  // const btcPrice = usePriceBTCBusd()
  // const pbtcPrice = usePricepBTCBusd()

  // Generate array of userFarm data
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userFarms = farms.map((farm, i) => useFarmUser(i))

  let value = new BigNumber(0)

  for (let i = 0; i < userFarms.length; i++) {
    const userFarm = userFarms[i]
    const farm = farms[i]
    if (farm.lpTotalInQuoteToken) {
      let val
      if (farm.quoteTokenSymbol === QuoteToken.BNB) {
        val = bnbPrice.times(userFarm.stakedBalance)
      } else if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
        val = cakePrice.times(userFarm.stakedBalance)
      } 
      // else if (farm.quoteTokenSymbol === QuoteToken.EBTC) {
      //   val = btcPrice.times(userFarm.stakedBalance)
      // } else if (farm.quoteTokenSymbol === QuoteToken.PBTC) {
      //   val = pbtcPrice.times(userFarm.stakedBalance)
      // } 
      else {
        val = userFarm.stakedBalance
      }
      value = value.plus(val)
    }
  }
  return value
}

export const fetchFarmUserEarnings = async (account: string) => {
  const masterChefAdress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: masterChefAdress,
      name: 'pendingPuma',
      params: [farm.pid, account],
    }
  })

  const rawEarnings = await multicall(masterchefABI, calls)
  const parsedEarnings = rawEarnings.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  return parsedEarnings
}
