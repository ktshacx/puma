import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import routerABI from 'config/abi/routerv2.json'
import multicall from 'utils/multicall'

import { getRouterAddress, getMasterChefAddress } from 'utils/addressHelpers'
import farmsConfig from 'config/constants/farms'
import { QuoteToken } from '../../config/constants/types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const fetchFarms = async () => {
  const data = await Promise.all(
    farmsConfig.map(async (farmConfig) => {
      const lpAdress = farmConfig.lpAddresses[CHAIN_ID]
      const calls = [
        // Balance of token in the LP contract
        {
          address: farmConfig.tokenAddresses[CHAIN_ID],
          name: 'balanceOf',
          params: [lpAdress],
        },
        // Balance of quote token on LP contract
        {
          address: farmConfig.quoteTokenAdresses[CHAIN_ID],
          name: 'balanceOf',
          params: [lpAdress],
        },
        // Balance of LP tokens in the master chef contract
        {
          address: farmConfig.isTokenOnly ? farmConfig.tokenAddresses[CHAIN_ID] : lpAdress,
          name: 'balanceOf',
          params: [getMasterChefAddress()],
        },
        // Total supply of LP tokens
        {
          address: lpAdress,
          name: 'totalSupply',
        },
        // Token decimals
        {
          address: farmConfig.tokenAddresses[CHAIN_ID],
          name: 'decimals',
        },
        // Quote token decimals
        {
          address: farmConfig.quoteTokenAdresses[CHAIN_ID],
          name: 'decimals',
        },
      ]

      const [tokenBalanceLP, quoteTokenBlanceLP, lpTokenBalanceMC, lpTotalSupply, tokenDecimals, quoteTokenDecimals] =
        await multicall(erc20, calls)
      let btcPriceQuote
      let pbtcPriceQuote
      let hexPriceQuote
      let ehexPriceQuote
      let tokenAmount
      let lpTotalInQuoteToken
      let tokenPriceVsQuote

      if (farmConfig.isTokenOnly) {
        tokenAmount = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals))
        if (farmConfig.tokenSymbol === QuoteToken.BUSD && farmConfig.quoteTokenSymbol === QuoteToken.BUSD) {
          tokenPriceVsQuote = new BigNumber(1)
        } else {
          tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP))
          lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote)
        }

        if (farmConfig.lpSymbol === 'PUMA') {
          lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote)
        } else if (
          farmConfig.lpSymbol === 'pHEX' ||
          farmConfig.lpSymbol === 'eHEX' ||
          farmConfig.lpSymbol === 'pWBTC' ||
          farmConfig.lpSymbol === 'eWBTC'
        ) {
          lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote).times(new BigNumber(10).pow(2))
        } else if (farmConfig.lpSymbol === 'pHDRN') {
          lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote).times(new BigNumber(10).pow(3))
        } else if (farmConfig.lpSymbol === 'pICSA') {
          lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote).div(new BigNumber(10).pow(9))
        } else if (farmConfig.lpSymbol === 'eUSDC') {
          tokenPriceVsQuote = new BigNumber(1)
        } else if (farmConfig.lpSymbol === 'eDAI') {
          tokenPriceVsQuote = new BigNumber(1)
          lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote)
        } else {
          lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote).times(new BigNumber(10).pow(12))
        }
      } else {
        // Ratio in % a LP tokens that are in staking, vs the total number in circulation
        const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

        if (farmConfig.lpSymbol.includes('PLS-USDC LP')) {
          // Total value in staking in quote token value
          lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
            .div(new BigNumber(10).pow(12))
            .times(new BigNumber(2))
            .times(lpTokenRatio)
            .times(new BigNumber(10).pow(6))
          console.log('%c Line:99 🥛 lpTotalInQuoteToken', 'color:#33a5ff', lpTotalInQuoteToken * 1)
          console.log('%c Line:99 🥛 quoteTokenBlanceLP', 'color:#33a5ff', quoteTokenBlanceLP * 1)
        } else if (farmConfig.lpSymbol.includes('WPLS-PLSX LP')) {
        // Total value in staking in quote token value
        lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
            .div(new BigNumber(10).pow(18))
            .times(new BigNumber(2))
            .times(lpTokenRatio)
          console.log('%c Line:107 🥛 quoteTokenBlanceLP', 'color:#33a5ff', lpTotalInQuoteToken * 1)
          console.log('%c Line:107 🥛 lpTokenRatio', 'color:#33a5ff', new BigNumber(lpTokenRatio).toNumber())
        } else if (farmConfig.lpSymbol.includes('-USDC')) {
          // Total value in staking in quote token value
          lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
            .div(new BigNumber(10).pow(12))
            .times(new BigNumber(2))
            .times(lpTokenRatio)
            .times(new BigNumber(10).pow(6))
        } else if (farmConfig.lpSymbol.includes('eBTC-pBTC LP')) {
          // Total value in staking in quote token value
          lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
            .div(new BigNumber(10).pow(8))
            .times(new BigNumber(2))
            .times(lpTokenRatio)
        } else if (farmConfig.lpSymbol.includes('pWBTC-PLSX LP')) {
          // Total value in staking in quote token value
          lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
            .div(new BigNumber(10).pow(8))
            .times(new BigNumber(2))
            .times(lpTokenRatio)
        } else if (farmConfig.lpSymbol.includes('eHEX-pHEX LP') || farmConfig.lpSymbol.includes('pHEX-PLSX LP')) {
          // Total value in staking in quote token value
          lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
            .div(new BigNumber(10).pow(8))
            .times(new BigNumber(2))
            .times(lpTokenRatio)
        } else if (farmConfig.lpSymbol.includes('eHEX-PLSX LP') || farmConfig.lpSymbol.includes('pHEX-PLSX LP')) {
          // Total value in staking in quote token value
          lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
            .div(new BigNumber(10).pow(18))
            .times(new BigNumber(2))
            .times(lpTokenRatio)
        } else {
          // Total value in staking in quote token value

          lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
            .div(new BigNumber(10).pow(18))
            .times(new BigNumber(2))
            .times(lpTokenRatio)
        }

        let quoteTokenAmount = new BigNumber(0)

        if (farmConfig.lpSymbol.includes('eBTC-pBTC LP')) {
          // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
          tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
          quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
            .div(new BigNumber(10).pow(quoteTokenDecimals))
            .times(lpTokenRatio)

          // get the BTC price

          const [amounts] = await multicall(routerABI, [
            {
              address: getRouterAddress(),
              name: 'getAmountsOut',
              params: [
                '100000000',
                [
                  '0xb17d901469b9208b17d916112988a3fed19b5ca1',
                  '0xA1077a294dDE1B09bB078844df40758a5D0f9a27',
                  '0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07',
                ],
              ],
            },
          ])
          btcPriceQuote = new BigNumber(amounts.amounts[1]._hex).div(new BigNumber(10).pow(22))
        } else if (farmConfig.lpSymbol.includes('pWBTC-PLSX LP')) {
          // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
          tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
          quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
            .div(new BigNumber(10).pow(quoteTokenDecimals))
            .times(lpTokenRatio)

          // get the BTC price

          const [amounts] = await multicall(routerABI, [
            {
              address: getRouterAddress(),
              name: 'getAmountsOut',
              params: [
                '100000000',
                [
                  '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
                  '0xA1077a294dDE1B09bB078844df40758a5D0f9a27',
                  '0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07',
                ],
              ],
            },
          ])
          pbtcPriceQuote = new BigNumber(amounts.amounts[1]._hex).div(new BigNumber(10).pow(22))
        } else if (farmConfig.lpSymbol.includes('eHEX-pHEX LP')) {
          // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
          tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
          quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
            .div(new BigNumber(10).pow(quoteTokenDecimals))
            .times(lpTokenRatio)

          // get the BTC price

          const [amounts] = await multicall(routerABI, [
            {
              address: getRouterAddress(),
              name: 'getAmountsOut',
              params: [
                '100000000',
                ['0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39', '0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07'],
              ],
            },
          ])
          hexPriceQuote = new BigNumber(amounts.amounts[1]._hex).div(new BigNumber(10).pow(6))

          const [amounts2] = await multicall(routerABI, [
            {
              address: getRouterAddress(),
              name: 'getAmountsOut',
              params: [
                '100000000',
                ['0x57fde0a71132198BBeC939B98976993d8D89D225', '0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07'],
              ],
            },
          ])
          ehexPriceQuote = new BigNumber(amounts2.amounts[1]._hex).div(new BigNumber(10).pow(6))
        } else {
          // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
          tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
          quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
            .div(new BigNumber(10).pow(quoteTokenDecimals))
            .times(lpTokenRatio)
        }

        if (tokenAmount.comparedTo(0) > 0) {
          tokenPriceVsQuote = new BigNumber(quoteTokenAmount).div(new BigNumber(tokenAmount))
          //  / tokenPriceVsQuote = tokenPriceVsQuote.times(new BigNumber(10).pow(12))
        } else {
          tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP))
          tokenPriceVsQuote = tokenPriceVsQuote.times(new BigNumber(10).pow(12))
        }
      }

      const [info, totalAllocPoint, pumaPerBlock] = await multicall(masterchefABI, [
        {
          address: getMasterChefAddress(),
          name: 'poolInfo',
          params: [farmConfig.pid],
        },
        {
          address: getMasterChefAddress(),
          name: 'totalAllocPoint',
        },
        {
          address: getMasterChefAddress(),
          name: 'pumaPerBlock',
        },
      ])

      const allocPoint = new BigNumber(info.allocPoint._hex)
      const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint))

      return {
        ...farmConfig,
        tokenAmount: tokenAmount.toJSON(),
        farmTokenDecimals: new BigNumber(tokenDecimals).toNumber(),
        // quoteTokenAmount: quoteTokenAmount,
        lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
        tokenPriceVsQuote: tokenPriceVsQuote.toJSON(),
        poolWeight: poolWeight.toNumber(),
        multiplier: `${allocPoint.div(100).toString()}X`,
        depositFeeBP: info.depositFeeBP,
        pumaPerBlock: new BigNumber(pumaPerBlock).toNumber(),
        btcPrice: new BigNumber(btcPriceQuote).toJSON(),
        pbtcPrice: new BigNumber(pbtcPriceQuote).toJSON(),
        hexPrice: new BigNumber(hexPriceQuote).toJSON(),
        ehexPrice: new BigNumber(ehexPriceQuote).toJSON(),
      }
    }),
  )
  return data
}

export default fetchFarms
