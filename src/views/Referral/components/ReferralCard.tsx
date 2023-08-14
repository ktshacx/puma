import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from 'pulsepumaui'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'


const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const ReferralCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const { account } = useWallet()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          Bring your friends to Pulse Puma and earn commission rewards
        </Heading>
        <>
          <Text color="textSubtle" mb="24px">
            Earn 30% of the deposit fee for all deposits that use your referral link to join the community
          </Text>
        </>
        <>
          <Text color="textSubtle">Your Referral link:</Text>
        </>
        <>{account && <Text color="textSubtle">{`https://pulsepuma.org/?referral=${account}`}</Text>}</>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default ReferralCard
