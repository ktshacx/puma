export type IfoStatus = 'coming_soon' | 'live' | 'finished'

export interface Ifo {
  id: string
  isActive: boolean
  address: string
  name: string
  subTitle?: string
  description?: string
  launchDate: string
  launchTime: string
  saleAmount: string
  raiseAmount: string
  cakeToBurn: string
  projectSiteUrl: string
  currency: string
  currencyAddress: string
  tokenDecimals: number
  releaseBlockNumber: number
}

export enum QuoteToken {
  'BNB' = 'BNB',
  'CAKE' = 'CAKE',
  'SYRUP' = 'SYRUP',
  'USDC' = 'USDC',
  'TWT' = 'TWT',
  'UST' = 'UST',
  'USDT' = 'USDT',
  'BTC' = 'BTC',
  'PULSEPUMA' = 'PULSEPUMA',
  'WMATIC' = 'WMATIC',
  'WAVAX' = 'WAVAX',
  'MATIC' = 'MATIC',
  'DAI' = 'DAI',
  'WETH' = 'WETH',
  'IRID-PULSEPUMA' = 'IRID-PULSEPUMA',
  BUSD = "BUSD",
  PBTC = "PBTC",
  PHEX = "PHEX",
  EBTC = "EBTC",
  EHEX = "EHEX",
  PLSX = "PLSX"
}

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native BNB behave differently than pools using a token
}

export interface Address {
  369: string
}

export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  tokenSymbol: string
  tokenAddresses: Address
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
  multiplier?: string
  multipliers?: string
  isTokenOnly?: boolean
  isCommunity?: boolean
  otherExchange?: string
  risk: number
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
}

export interface PoolConfig {
  sousId: number
  image?: string
  tokenName: string
  stakingTokenName: QuoteToken
  stakingLimit?: number
  stakingTokenAddress?: string
  contractAddress: Address
  poolCategory: PoolCategory
  projectLink: string
  tokenPerBlock: string
  sortOrder?: number
  harvest?: boolean
  isFinished?: boolean
  tokenDecimals: number
}

export type Nft = {
  name: string
  description: string
  originalImage: string
  previewImage: string
  blurImage: string
  sortOrder: number
  bunnyId: number
}
