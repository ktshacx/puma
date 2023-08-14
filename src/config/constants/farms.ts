import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'WPLS-PLSX LP',
    lpAddresses: {
      369: '0x149B2C629e652f2E89E11cd57e5d4D77ee166f9F',
    },
    tokenSymbol: 'WPLS',
    tokenAddresses: {
      369: '0xa1077a294dde1b09bb078844df40758a5d0f9a27',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    multipliers: '0.5X',
  },

  // {
  //   pid: 2,
  //   risk: 5,
  //   lpSymbol: 'HEX-PLS LP',
  //   lpAddresses: {
  //     369: '0xf0ea3efe42c11c8819948ec2d3179f4084863d3f',
  //   },
  //   tokenSymbol: 'PUMA',
  //   tokenAddresses: {
  //     369: '0xa1077a294dde1b09bb078844df40758a5d0f9a27',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multipliers: '0.5X',
  // },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'PLS-USDC LP',
    lpAddresses: {
      369: '0x8eBe62D5e9D26b637673d91f56900233d6A4910d',
    },
    tokenSymbol: 'PUMA',
    tokenAddresses: {
      369: '0xa1077a294dde1b09bb078844df40758a5d0f9a27',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.BUSD,
    multipliers: '0.5X',
  },
  // {
  //   pid: 3,
  //   risk: 5,
  //   lpSymbol: 'PLS-DAI LP',
  //   lpAddresses: {
  //     369: '0x146e1f1e060e5b5016db0d118d2c5a11a240ae32',
  //   },
  //   tokenSymbol: 'PUMA',
  //   tokenAddresses: {
  //     369: '0xa1077a294dde1b09bb078844df40758a5d0f9a27',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.DAI,
  //   multipliers: '0.5X',
  // },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'eHEX-PLSX LP',
    lpAddresses: {
      369: '0x4D34D07B5F8A11892Dd8619f30899585B5B0BF2D',
    },
    tokenSymbol: 'PUMA',
    tokenAddresses: {
      369: '0x57fde0a71132198bbec939b98976993d8d89d225',
    },
    quoteTokenSymbol: QuoteToken.PLSX,
    quoteTokenAdresses: contracts.PLS,
    multipliers: '0.5X',
  },
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'pHEX-PLSX LP',
    lpAddresses: {
      369: '0xa04620601d7DAdc3BD1c99312A699aDe8e6C16d2',
    },
    tokenSymbol: 'PUMA',
    tokenAddresses: {
      369: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
    },
    quoteTokenSymbol: QuoteToken.PLSX,
    quoteTokenAdresses: contracts.DAI1,
    multipliers: '0.5X',
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'eHEX-pHEX LP',
    lpAddresses: {
      369: '0x1dA059091d5fe9F2d3781e0FdA238BB109FC6218',
    },
    tokenSymbol: 'PUMA',
    tokenAddresses: {
      369: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
    },
    quoteTokenSymbol: QuoteToken.PLSX,
    quoteTokenAdresses: contracts.DAI3,
    multipliers: '0.5X',
  },
  // {
  //   pid: 7,
  //   risk: 5,
  //   lpSymbol: 'HEX-USDC LP',
  //   lpAddresses: {
  //     369: '0x1dA059091d5fe9F2d3781e0FdA238BB109FC6218',
  //   },
  //   tokenSymbol: 'PUMA',
  //   tokenAddresses: {
  //     369: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
  //   },
  //   quoteTokenSymbol: QuoteToken.PLSX,
  //   quoteTokenAdresses: contracts.DAI3,
  //   multipliers: '0.5X',
  // },

  // {
  //   pid: 8,
  //   risk: 5,
  //   lpSymbol: 'eHEX-USDC LP',
  //   lpAddresses: {
  //     369: '0x1dA059091d5fe9F2d3781e0FdA238BB109FC6218',
  //   },
  //   tokenSymbol: 'PUMA',
  //   tokenAddresses: {
  //     369: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
  //   },
  //   quoteTokenSymbol: QuoteToken.PLSX,
  //   quoteTokenAdresses: contracts.DAI3,
  //   multipliers: '0.5X',
  // },
  // {
  //   pid: 9,
  //   risk: 5,
  //   lpSymbol: 'ETH-USDC LP',
  //   lpAddresses: {
  //     369: '0x1dA059091d5fe9F2d3781e0FdA238BB109FC6218',
  //   },
  //   tokenSymbol: 'PUMA',
  //   tokenAddresses: {
  //     369: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
  //   },
  //   quoteTokenSymbol: QuoteToken.PLSX,
  //   quoteTokenAdresses: contracts.DAI3,
  //   multipliers: '0.5X',
  // },
  // {
  //   pid: 10,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'PUMA',
  //   lpAddresses: {
  //     369: '0x047c3d3716e1aa660604baf297c944564cf1fe83', // puma-usdc
  //   },
  //   tokenSymbol: 'PUMA',
  //   tokenAddresses: {
  //     369: '0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   multipliers: '23X',
  // },

  // {
  //   pid: 1,
  //   risk: 3,
  //   lpSymbol: 'PUMA-PLS LP',
  //   lpAddresses: {
  //     369: '0x9d2201e64d8ab786702e45bfe842760635eb32ac',
  //   },
  //   tokenSymbol: 'PUMA',
  //   tokenAddresses: {
  //     369: '0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multipliers: '23X',
  // },
  // {
  //   pid: 3,
  //   risk: 3,
  //   lpSymbol: 'PLS-USDC LP',
  //   lpAddresses: {
  //     369: '0x6753560538ECa67617A9Ce605178F788bE7E524E',
  //   },
  //   tokenSymbol: 'BNB',
  //   tokenAddresses: {
  //     369: '0xA1077a294dDE1B09bB078844df40758a5D0f9a27',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multipliers: '0.5X',
  // },
  // {
  //   pid: 2,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'PUMA',
  //   lpAddresses: {
  //     369: '0x047c3d3716e1aa660604baf297c944564cf1fe83', // puma-usdc
  //   },
  //   tokenSymbol: 'PUMA',
  //   tokenAddresses: {
  //     369: '0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  // {
  //   pid: 11,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'PLSX',
  //   lpAddresses: {
  //     369: '0x9a34B4064b285BF75ECA1c85b05c6eD45F2BeD28', // PLSX-usdc
  //   },
  //   tokenSymbol: 'PLSX',
  //   tokenAddresses: {
  //     369: '0x95b303987a60c71504d99aa1b13b4da07b0790ab',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multipliers: '0.5X',
  // },
  // {
  //   pid: 5,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'XEN',
  //   lpAddresses: {

  //     369: '0x84BF7e824e86a40aBCF036ae8F7181B595194dc7', // xen-usdc
  //   },
  //   tokenSymbol: 'XEN',
  //   tokenAddresses: {

  //     369: '0x8a7FDcA264e87b6da72D000f22186B4403081A2a',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 12,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'pHEX',
  //   // lpSymbolAlt: 'pHEX',
  //   lpAddresses: {
  //     369: '0x2cc85b82ce181bce921dc4c0758cfd37a6bc240a', // hex-usdc
  //   },
  //   tokenSymbol: 'pHEX',
  //   tokenAddresses: {
  //     369: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '0.5X',
  // },
  // {
  //   pid: 13,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'INC',
  //   lpAddresses: {
  //     369: '0xfbd76fff57cc1ae061b5a73be9bb627c56573414', // inc-usdc
  //   },
  //   tokenSymbol: 'INC',
  //   tokenAddresses: {
  //     369: '0x2fa878ab3f87cc1c9737fc071108f904c0b0c95d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '0.5X',
  // },
  // {
  //   pid: 8,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'MORE',
  //   lpAddresses: {

  //     369: '0xD02B57269e3909232898b55620f60a981Ee1ccD7', // more-usdc
  //   },
  //   tokenSymbol: 'MORE',
  //   tokenAddresses: {

  //     369: '0xbEEf3bB9dA340EbdF0f5bae2E85368140d7D85D0',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 9,
  //   risk: 3,
  //   lpSymbol: 'MORE-PLS LP',
  //   lpAddresses: {

  //     369: '0xbd1364edba35a7284ebac9710894c9b2d5ebf8c5',
  //   },
  //   tokenSymbol: 'MORE',
  //   tokenAddresses: {

  //     369: '0xbd1364edba35a7284ebac9710894c9b2d5ebf8c5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 10,
  //   risk: 3,
  //   lpSymbol: 'XEN-PLS LP',
  //   lpAddresses: {

  //     369: '0x9194fe03E648E1220fA8267D699CeF1A20A6AC88',
  //   },
  //   tokenSymbol: 'XEN',
  //   tokenAddresses: {

  //     369: '0x06450dee7fd2fb8e39061434babcfc05599a6fb8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 14,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WPLS',
  //   lpAddresses: {
  //     369: '0x6753560538ECa67617A9Ce605178F788bE7E524E', // WPLS-usdc
  //   },
  //   tokenSymbol: 'WPLS',
  //   tokenAddresses: {
  //     369: '0xa1077a294dde1b09bb078844df40758a5d0f9a27',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '0.5X',
  // },
  // {
  //   pid: 15,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WETH',
  //   lpAddresses: {
  //     369: '0x6786a4125fd26b11f1013372f6e6483e0e5bef6b', // WETH-usdc
  //   },
  //   tokenSymbol: 'WETH',
  //   tokenAddresses: {
  //     369: '0x02DcdD04e3F455D838cd1249292C58f3B79e3C3C',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '0.5X',
  // },
  // {
  //   pid: 13,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'PLSL',
  //   lpAddresses: {

  //     369: '0x3d608747f215e6754Ee3259F4453cF4E693Fc947', // WETH-wbnb
  //   },
  //   tokenSymbol: 'PLSL',
  //   tokenAddresses: {

  //     369: '0x0Fec5F39B3DB85a84F5bfa76935f69095478662e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 14,
  //   risk: 3,
  //   lpSymbol: 'PLSL-PLS LP',
  //   lpAddresses: {

  //     369: '0xa6dFf9646075a81b8F5CdB295253b0e833E58458',
  //   },
  //   tokenSymbol: 'PLSL',
  //   tokenAddresses: {

  //     369: '0x0Fec5F39B3DB85a84F5bfa76935f69095478662e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 16,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'eHEX',
  //   lpAddresses: {
  //     369: '0xb4192f2a7bd6af8465779dc8fd57dcd50610fe91', // ehex-wbnb
  //   },
  //   tokenSymbol: 'eHEX',
  //   tokenAddresses: {
  //     369: '0x57fde0a71132198BBeC939B98976993d8D89D225',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '0.5X',
  // },
  // {
  //   pid: 17,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'pWBTC',
  //   lpAddresses: {
  //     369: '0xe0a31bd1d393774746748bcc17c9ab669f7d4307', // ebtc-usdc
  //   },
  //   tokenSymbol: 'pWBTC',
  //   tokenAddresses: {
  //     369: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '0.5X',
  // },
  // {
  //   pid: 18,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'eWBTC',
  //   lpAddresses: {
  //     369: '0x6fa61478b00370eb1407c1b8fc1fd7db45d84bd3', // ebtc-usdc
  //   },
  //   tokenSymbol: 'eWBTC',
  //   tokenAddresses: {
  //     369: '0xb17D901469B9208B17d916112988A3FeD19b5cA1',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '0.5X',
  // },
  // {
  //   pid: 18,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'pHDRN',
  //   lpAddresses: {

  //     369: '0xa0e55AC5B6464bb519CAE2F68c060aaF32114313', // hdrn-wpls
  //   },
  //   tokenSymbol: 'pHDRN',
  //   tokenAddresses: {

  //     369: '0x3819f64f282bf135d62168c1e513280daf905e06',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 19,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'pHEX-PUMA LP',
  //   lpAddresses: {

  //     369: '0x32FBC3BE56497859841b0148b4DbebeF8Dd4B4d4', // eHEX-PUMA
  //   },
  //   tokenSymbol: 'pHEX',
  //   tokenAddresses: {

  //     369: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  // {
  //   pid: 20,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'eHEX-PUMA LP',
  //   lpAddresses: {

  //     369: '0xc4e106bBaEf58515301789D7de5e8dA3f48F6828', // eHEX-PUMA
  //   },
  //   tokenSymbol: 'eHEX',
  //   tokenAddresses: {

  //     369: '0x57fde0a71132198BBeC939B98976993d8D89D225',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  // {
  //   pid: 19,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'eUSDC',
  //   lpAddresses: {
  //     369: '0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07', // hdrn-wpls
  //   },
  //   tokenSymbol: 'eUSDC',
  //   tokenAddresses: {
  //     369: '0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '0.5X',
  // },
  // {
  //   pid: 20,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'eDAI',
  //   lpAddresses: {
  //     369: '0xefd766ccb38eaf1dfd701853bfce31359239f305', // hdrn-wpls
  //   },
  //   tokenSymbol: 'eDAI',
  //   tokenAddresses: {
  //     369: '0xefd766ccb38eaf1dfd701853bfce31359239f305',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '0.5X',
  // },
  // {
  //   pid: 23,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'PLSX-PUMA LP',
  //   lpAddresses: {

  //     369: '0xdb449461e31527B184360a31DbeF97F99C2Eb26B', // eHEX-PUMA
  //   },
  //   tokenSymbol: 'PLSX',
  //   tokenAddresses: {

  //     369: '0x95B303987A60C71504D99Aa1b13B4DA07b0790ab',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  // {
  //   pid: 24,
  //   risk: 3,
  //   lpSymbol: 'PLS-PLSX LP',
  //   lpAddresses: {

  //     369: '0x1b45b9148791d3a104184Cd5DFE5CE57193a3ee9',
  //   },
  //   tokenSymbol: 'PLSX',
  //   tokenAddresses: {

  //     369: '0x95B303987A60C71504D99Aa1b13B4DA07b0790ab',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 25,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'eBTC-pBTC LP',
  //   lpAddresses: {

  //     369: '0x80a600F7Bd4eb31183A23175dC61c269E6d20588', // eHEX-PUMA
  //   },
  //   tokenSymbol: 'pBTC',
  //   tokenAddresses: {

  //     369: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  //   },
  //   quoteTokenSymbol: QuoteToken.EBTC,
  //   quoteTokenAdresses: contracts.ebtc,
  // },
  // {
  //   pid: 26,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'eHEX-pHEX LP',
  //   lpAddresses: {

  //     369: '0x1dA059091d5fe9F2d3781e0FdA238BB109FC6218', // eHEX-PUMA
  //   },
  //   tokenSymbol: 'eHEX',
  //   tokenAddresses: {

  //     369: '0x57fde0a71132198BBeC939B98976993d8D89D225',
  //   },
  //   quoteTokenSymbol: QuoteToken.PHEX,
  //   quoteTokenAdresses: contracts.phex,
  // },
  // {
  //   pid: 27,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'pICSA',
  //   lpAddresses: {

  //     369: '0xbf5508ee175a48bebbe7383daa3947d7afe7b794', // hdrn-wpls
  //   },
  //   tokenSymbol: 'pICSA',
  //   tokenAddresses: {

  //     369: '0xfc4913214444aF5c715cc9F7b52655e788A569ed',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 28,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'pHEX-PLSX LP',
  //   lpAddresses: {

  //     369: '0xa04620601d7dadc3bd1c99312a699ade8e6c16d2', // eHEX-PUMA
  //   },
  //   tokenSymbol: 'plsx',
  //   tokenAddresses: {

  //     369: '0x95b303987a60c71504d99aa1b13b4da07b0790ab',
  //   },
  //   quoteTokenSymbol: QuoteToken.PHEX,
  //   quoteTokenAdresses: contracts.phex,
  // },
  // {
  //   pid: 29,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'eHEX-PLSX LP',
  //   lpAddresses: {

  //     369: '0x4D34D07B5F8A11892Dd8619f30899585B5B0BF2D', // eHEX-PUMA
  //   },
  //   tokenSymbol: 'plsx',
  //   tokenAddresses: {

  //     369: '0x57fde0a71132198BBeC939B98976993d8D89D225',
  //   },
  //   quoteTokenSymbol: QuoteToken.EHEX,
  //   quoteTokenAdresses: contracts.ehex,
  // },
  // {
  //   pid: 30,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'pWBTC-PUMA LP',
  //   lpAddresses: {

  //     369: '0xef3E547F9542d83e4d442C98233c6c0e85d0DEBe', // eHEX-PUMA
  //   },
  //   tokenSymbol: 'PUMA',
  //   tokenAddresses: {

  //     369: '0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  // {
  //   pid: 31,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'pAAVE',
  //   lpAddresses: {

  //     369: '0xb04998feededf8944e2230a43604f8fa9a2fa539', // pAAVE-wpls
  //   },
  //   tokenSymbol: 'pAAVE',
  //   tokenAddresses: {

  //     369: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 32,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'pHEX-WPLS LP',
  //   lpAddresses: {

  //     369: '0xf1F4ee610b2bAbB05C635F726eF8B0C568c8dc65', // pHEX-WPLS LP
  //   },
  //   tokenSymbol: 'phex',
  //   tokenAddresses: {

  //     369: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 33,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'eHEX-WPLS LP',
  //   lpAddresses: {

  //     369: '0xAa1Ea17e7499f892ab9E45E139D843049942Fb7a', // pHEX-WPLS LP
  //   },
  //   tokenSymbol: 'ehex',
  //   tokenAddresses: {

  //     369: '0x57fde0a71132198BBeC939B98976993d8D89D225',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 34,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'pPEPE-PUMA LP',
  //   lpAddresses: {

  //     369: '0x7C6926cCD246Daf954236E32f3442d64Da691C6c', // pPEPE-PUMA LP
  //   },
  //   tokenSymbol: 'ppepe',
  //   tokenAddresses: {

  //     369: '0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  // {
  //   pid: 35,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'pPEPE',
  //   lpAddresses: {

  //     369: '0x06f6bf96999713418f6742651ff9bb44f83fc84d', // pPEPE-USDC LP
  //   },
  //   tokenSymbol: 'pPEPE',
  //   tokenAddresses: {

  //     369: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 36,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'pLINK',
  //   lpAddresses: {

  //     369: '0x2f55fe1e168cc51d44396f1f976e1cc959eaab29', // pLINK-USDC LP
  //   },
  //   tokenSymbol: 'pLINK',
  //   tokenAddresses: {

  //     369: '0x514910771af9ca656af840dff83e8264ecf986ca',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 37,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'pUNI',
  //   lpAddresses: {

  //     369: '0xe80445432d600b727abd61BFbf2f06f272e4b80A', // pUNI-USDC LP
  //   },
  //   tokenSymbol: 'pUNI',
  //   tokenAddresses: {

  //     369: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 38,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'RBC',
  //   lpAddresses: {

  //     369: '0xe65a657a753b2111b5c6402c4cfb74ee4812010b', // RBC-USDC LP
  //   },
  //   tokenSymbol: 'RBC',
  //   tokenAddresses: {

  //     369: '0x43eaba2E2d2F32f1207A11a18679287Dc7700015',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 39,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'pSHIB',
  //   lpAddresses: {

  //     369: '0x21a105c274cfe0f31b5bc38e656108ed48134c77', // pSHIB-USDC LP
  //   },
  //   tokenSymbol: 'pSHIB',
  //   tokenAddresses: {

  //     369: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 40,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'pSHIB-PUMA LP',
  //   lpAddresses: {
  //     369: '0xbc53ab6a4f38252b52ac323a97bbb78c6e9f7610', // pSHIB-PUMA LP
  //   },
  //   tokenSymbol: 'pSHIB',
  //   tokenAddresses: {
  //     369: '0x5E389ac999A6D3a0208deF0d9c7DB1919Da938fF',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  // {
  //   pid: 41,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'pWBTC-PLSX LP',
  //   lpAddresses: {
  //     369: '0xb1f902df906461263fc9b35d1b038962e88aea76', // pWBTC-PLSX
  //   },
  //   tokenSymbol: 'plsx',
  //   tokenAddresses: {
  //     369: '0x95b303987a60c71504d99aa1b13b4da07b0790ab',
  //   },
  //   quoteTokenSymbol: QuoteToken.PBTC,
  //   quoteTokenAdresses: contracts.pbtc,
  // },
]

export default farms
