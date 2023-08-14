import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton } from 'yieldzk-uikit'
import { communityFarms } from 'config/constants'
import { Farm } from 'state/types'
import { provider } from 'web3-core'
import useI18n from 'hooks/useI18n'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { QuoteToken } from 'config/constants/types'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

const RainbowLight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(75, 0, 130, 1) 0%,
    /* Indigo */ rgba(138, 43, 226, 1) 10%,
    /* Blue Violet */ rgba(148, 0, 211, 1) 20%,
    /* Dark Violet */ rgba(255, 20, 147, 1) 30%,
    /* Deep Pink */ rgba(255, 105, 180, 1) 40%,
    /* Hot Pink */ rgba(255, 192, 203, 1) 50%,
    /* Pink */ rgba(255, 105, 180, 1) 60%,
    /* Hot Pink */ rgba(148, 0, 211, 1) 70%,
    /* Deep Pink */ rgba(148, 0, 211, 1) 80%,
    /* Dark Violet */ rgba(138, 43, 226, 1) 90%,
    /* Blue Violet */ rgba(75, 0, 130, 1) 100% /* Indigo */
  );

  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 16px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.colors.background};
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBorder};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  cakePrice?: BigNumber
  bnbPrice?: BigNumber
  btcPrice?: BigNumber
  hexPrice?: BigNumber
  ehexPrice?: BigNumber
  pBtcPrice?: BigNumber
  ethereum?: provider
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({
  farm,
  removed,
  cakePrice,
  bnbPrice,
  ethereum,
  account,
  btcPrice,
  hexPrice,
  ehexPrice,
  pBtcPrice,
}) => {
  const TranslateString = useI18n()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  // const isCommunityFarm = communityFarms.includes(farm.tokenSymbol)
  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  // const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()
  const farmImage = farm.isTokenOnly
    ? farm.tokenSymbol.toLowerCase()
    : `${farm.tokenSymbol.toLowerCase()}-${farm.quoteTokenSymbol.toLowerCase()}`

  const totalValue: BigNumber = useMemo(() => {
    if (!farm.lpTotalInQuoteToken) {
      return null
    }
    if (farm.quoteTokenSymbol === QuoteToken.BNB) {
      return bnbPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
      return cakePrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.EBTC) {
      // we need EBTC price
      return btcPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.PBTC) {
      // we need EBTC price
      console.log(pBtcPrice.times(farm.lpTotalInQuoteToken))
      return pBtcPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.PHEX) {
      // we need EBTC price
      return hexPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.EHEX) {
      // we need EBTC price
      return ehexPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.PLSX) {
      return bnbPrice.times(farm.lpTotalInQuoteToken)
    }
    return farm.lpTotalInQuoteToken;
  }, [bnbPrice, cakePrice, farm.lpTotalInQuoteToken, farm.quoteTokenSymbol, btcPrice, hexPrice, ehexPrice, pBtcPrice])

  const totalValueFormated = totalValue
    ? `$${Number(totalValue).toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })}`
    : '-'

  const lpLabel = farm.lpSymbol
  const earnLabel = 'PUMA'

  const farmAPY =
    farm.apy &&
    farm.apy.times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  /*
  if (new BigNumber(farmAPY) > new BigNumber(100000)) {
    farmAPY = new BigNumber(100000).toString()
  }
*/
  const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses, risk } = farm

  return (
    <FCard>
      {farm.pid === 0 && <StyledCardAccent />}
      {farm.pid === 1 && <StyledCardAccent />}
      {farm.pid === 2 && <StyledCardAccent />}
      {farm.pid === 3 && <StyledCardAccent />}
      {farm.pid === 4 && <StyledCardAccent />}
      {farm.pid === 5 && <StyledCardAccent />}
      {farm.pid === 6 && <StyledCardAccent />}
      {farm.pid === 7 && <StyledCardAccent />}
      {farm.pid === 8 && <StyledCardAccent />}
      {farm.pid === 9 && <StyledCardAccent />}
      {farm.pid === 10 && <StyledCardAccent />}
      {farm.pid === 11 && <StyledCardAccent />}
      {farm.pid === 12 && <StyledCardAccent />}
      {farm.pid === 13 && <StyledCardAccent />}
      {farm.pid === 14 && <StyledCardAccent />}
      {farm.pid === 15 && <StyledCardAccent />}
      {farm.pid === 16 && <StyledCardAccent />}
      {farm.pid === 17 && <StyledCardAccent />}
      {farm.pid === 18 && <StyledCardAccent />}
      {farm.pid === 19 && <StyledCardAccent />}
      {farm.pid === 20 && <StyledCardAccent />}
      {farm.pid === 21 && <StyledCardAccent />}
      {farm.pid === 22 && <StyledCardAccent />}
      {farm.pid === 23 && <StyledCardAccent />}
      {farm.pid === 24 && <StyledCardAccent />}
      <CardHeading
        lpLabel={lpLabel}
        multiplier={farm?.multipliers ? farm.multipliers : farm.multiplier}
        risk={risk}
        depositFee={farm.depositFeeBP}
        farmImage={farm.lpSymbol}
        tokenSymbol={farm.tokenSymbol}
      />
      {!removed && (
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{TranslateString(352, 'APR')}:</Text>
          <Text bold style={{ display: 'flex', alignItems: 'center' }}>
            {farm.apy ? (
              <>
                <ApyButton
                  lpLabel={lpLabel}
                  quoteTokenAdresses={quoteTokenAdresses}
                  quoteTokenSymbol={quoteTokenSymbol}
                  tokenAddresses={tokenAddresses}
                  cakePrice={cakePrice}
                  apy={farm.apy}
                />
                <p style={{ wordBreak: 'break-all' }}>{farmAPY}%</p>
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </Text>
        </Flex>
      )}
      <Flex justifyContent="space-between">
        <Text>{TranslateString(318, 'Earn')}:</Text>
        <Text bold>{earnLabel}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Fee :</Text>
        <Text bold>{lpLabel?.includes('PUMA') ? 0 : 4}%</Text>
      </Flex>

      <CardActionsContainer farm={farm} ethereum={ethereum} account={account} />
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          isTokenOnly={farm.isTokenOnly}
          bscScanAddress={
            farm.isTokenOnly
              ? `https://scan.pulsechain.com/token/${farm.tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : `https://scan.pulsechain.com/token/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`
          }
          totalValueFormated={totalValueFormated}
          lpLabel={lpLabel}
          quoteTokenAdresses={quoteTokenAdresses}
          quoteTokenSymbol={quoteTokenSymbol}
          tokenAddresses={tokenAddresses}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

export default FarmCard
