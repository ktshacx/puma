import { MenuEntry } from 'platinumfinancev2'
import { LinkStatus } from 'platinumfinancev2/dist/widgets/Menu/types'

export const status = {
  LIVE: <LinkStatus>{
    text: 'LIVE',
    color: 'failure',
  },
  SOON: <LinkStatus>{
    text: 'SOON',
    color: 'failure',
  },
  NEW: <LinkStatus>{
    text: 'NEW',
    color: 'warning',
  },
}

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Layers',
  //   icon: 'footballIcon',
  //   items: [
  //     {
  //       label: 'Marvin Finance',
  //       href: '/',
  //     },
  //     {
  //       label: 'English Finance',
  //       href: 'https://english.theflyingmarvinman.finance/',
  //       status: status.NEW,
  //     },
  //   ],
  // },
  {
    label: 'Trade (Pulse)',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://v2-app.pulsex.com/swap?&outputCurrency=0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF',
      },
      {
        label: 'Liquidity',
        href: 'https://v2-app.pulsex.com/add/0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
    // status: status.NEW,
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
    // status: status.NEW,
  },
  {
    label: 'Referral',
    icon: 'PoolIcon',
    href: '/referral',
    // status: status.NEW,
  },
  {
    label: 'Vesting',
    icon: 'TicketIcon',
    href: 'https://presale.pulsepuma.org/',
    // status: status.NEW,
  },
  // {
  //   label: 'Community Pools',
  //   icon: 'GroupsIcon',
  //   href: '/community',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Charts',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'QuickChart',
  //       href: 'https://quickchart.app/token/0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF',
  //     },
  //     {
  //       label: 'PolyChart',
  //       href: 'https://app.polychart.io/explorer/polygon/0x17C046edF151590a64EBE02B1Ff908c780EdE102',
  //     },
  //     {
  //       label: 'DexGuru',
  //       href: 'https://dex.guru/token/0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF-avax',
  //     },
  //     {
  //       label: 'PooCoin',
  //       href: 'https://polygon.poocoin.app/tokens/0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF',
  //     },
  //     {
  //       label: 'PUMA/PLS',
  //       href: 'https://www.defined.fi/arb/0xe288b49ec69cd010b7c87ea722f07b67abc02288',
  //     },
  //     {
  //       label: 'PUMA/USDC',
  //       href: 'https://www.defined.fi/arb/0x17c046edf151590a64ebe02b1ff908c780ede102',
  //     },
  //   ],
  // },
  // {
  //   label: 'Contracts',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Puma Token',
  //       href: 'https://arbiscan.io/address/0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF#code',
  //     },
  //     {
  //       label: 'MasterChef',
  //       href: 'https://arbiscan.io/address/0x583420049bed3c15e9694c06c488ebac65d4a0b0#code',
  //     },
  //     {
  //       label: 'MultiSign',
  //       href: 'https://arbiscan.io/address/0x082eb2a381825dd3ae196ad32be077990b3f0b37#code',
  //     },
  //   ],
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/MarvinFinance',
  //     },
  //     {
  //       label: 'Vfat.tools',
  //       href: 'https://vfat.tools/arbitrum/marvin/',
  //     },
  //     //  {
  //     //   label: 'Sushiswap Info',
  //     //   href: 'https://scan.pulsechain.com/tokens/0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF',
  //     // },
  //     // {
  //     //   label: 'Docs',
  //     //   href: 'https://themarvinswap.gitbook.io/the-marvin-swap/',
  //     // },
  //     // {
  //     //   label: 'Medium',
  //     //   href: 'https://medium.com/@themarvinswap',
  //     // },
  //   ],
  // },
]

export default config
