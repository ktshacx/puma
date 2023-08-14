import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from 'pulsepumaui'

const NoFeeTag = () => (
  <Tag variant="failure" outline startIcon={<VerifiedIcon />}>
    No Fees
  </Tag>
)

const RiskTag = ({ risk }) => (
  <Tag variant={risk >= 3 ? 'failure' : 'success'} outline startIcon={<VerifiedIcon />}>
    Risk {risk}
  </Tag>
)

const CoreTag = () => (
  <Tag variant='secondary' outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
)

const ExchangeTag = ({exchange}) => (
  <Tag variant='primary' outline >
    {exchange}
  </Tag>
)

const CommunityTag = () => (
  <Tag variant='textSubtle' outline startIcon={<CommunityIcon />}>
    Community
  </Tag>
)

const BinanceTag = () => (
  <Tag variant='binance' outline startIcon={<BinanceIcon />}>
    Binance
  </Tag>
)

export { CoreTag, CommunityTag, BinanceTag, RiskTag, NoFeeTag, ExchangeTag }
