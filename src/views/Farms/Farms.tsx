/* eslint-disable prefer-template */
import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from 'pulsepumaui'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import {
  useFarms,
  usePriceBnbBusd,
  usePriceCakeBusd,
  // usePriceBTCBusd,
  // usePriceHEXBusd,
  // usePriceEHEXBusd,
  // usePricepBTCBusd,
} from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

export interface FarmsProps {
  tokenMode?: boolean
}

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  console.log('farmsProps: ', farmsProps);
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  // const btcPrice = usePriceBTCBusd()
  // const pbtcPrice = usePricepBTCBusd()
  // const hexPrice = usePriceHEXBusd()
  // const ehexPrice = usePriceEHEXBusd()
  // const plsxPrice = usePricepBTCBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { tokenMode } = farmsProps

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
        const pumaRewardPerBlock = new BigNumber(farm.pumaPerBlock || 1)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        let cakeRewardPerYear = pumaRewardPerBlock.times(BLOCKS_PER_YEAR)

        if (farm.pid === 3) {
          cakeRewardPerYear = cakeRewardPerYear.multipliedBy(new BigNumber(10)).dividedBy(new BigNumber(4))
        }

        let apy = cakePrice.times(cakeRewardPerYear)

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0)

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice)
        }
        // else if (farm.quoteTokenSymbol === QuoteToken.EBTC) {
        //   totalValue = new BigNumber(totalValue).times(btcPrice)
        // } else if (farm.quoteTokenSymbol === QuoteToken.PBTC) {
        //   totalValue = new BigNumber(totalValue).times(pbtcPrice)
        // } else if (farm.quoteTokenSymbol === QuoteToken.PHEX) {
        //   totalValue = new BigNumber(totalValue).times(hexPrice)
        // } else if (farm.quoteTokenSymbol === QuoteToken.EHEX) {
        //   totalValue = new BigNumber(totalValue).times(ehexPrice)
        // } else if (farm.quoteTokenSymbol === QuoteToken.PLSX) {
        //   totalValue = new BigNumber(totalValue).times(plsxPrice)
        // }

        if (totalValue.comparedTo(0) > 0) {
          apy = apy.div(totalValue)
        }

        return { ...farm, apy }
      })
      console.log('farmsToDisplayWithAPY: ', farmsToDisplayWithAPY);
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={cakePrice}
          ethereum={ethereum}
          account={account}
          // btcPrice={btcPrice}
          // pBtcPrice={pbtcPrice}
          // hexPrice={hexPrice}
          // ehexPrice={ehexPrice}
        />
      ))
    },
    [cakePrice, bnbPrice, ethereum, account],
    // [cakePrice, bnbPrice, btcPrice, pbtcPrice, hexPrice, ehexPrice, plsxPrice, ethereum, account],
  )

  return (
    <Page>
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        {tokenMode
          ? TranslateString(10002, 'Stake tokens to earn PUMA')
          : TranslateString(320, 'Stake LP tokens to earn PUMA')}
      </Heading>
      <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly} />
      <div>
        <Divider />
        <FlexLayout>
          <Route exact path={`${path}`}>
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
      {/*
      <Image
        src={process.env.PUBLIC_URL + '/images/egg/8.png'}
        alt="illustration"
        width={1352}
        height={587}
        responsive
      />
       */}
    </Page>
  )
}

export default Farms
