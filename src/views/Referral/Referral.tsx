import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'pulsepumaui'

import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'

import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import ReferralCard from './components/ReferralCard'
// import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;

  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 8px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const StyledImage = styled.img`
  width: 100%;
  max-width: 250px; // Adjust this value according to your needs
  height: auto;

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 250px; // Adjust this value according to your needs
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 12;
    }
  }
`

const Referral: React.FC = () => {
  return (
    <Page>
      <Hero>
        <StyledImage src="logo.jpg" alt="Pulse.Puma" />

        <Text>Stake, Earn, and Cruise On Pulse</Text>
      </Hero>
      <div>
        <Cards>
          {/*
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
           */}
          <ReferralCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Referral
