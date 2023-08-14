/* eslint-disable no-else-return */
import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { useWallet } from '@binance-chain/bsc-use-wallet'

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const stake = async (masterChefContract, pid, amount, account) => {
  const urlParams = new URLSearchParams(window.location.search)
  let decimals = 18
  if (pid === 6 || pid === 15 || pid === 16 || pid === 17) {
    decimals = 8
  } else if (pid === 18 || pid === 27) {
    decimals = 9
  } else if (pid === 21) {
    decimals = 6
  }

  // Retrieve the referral number from local storage
  const referral = localStorage.getItem('referral')
    console.log('Referral:', referral)

  if (referral && referral !== account) {
    // eslint-disable-next-line no-console
    return masterChefContract.methods
      .depositReferral(pid, new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString(), referral)
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } else {
    return masterChefContract.methods
      .deposit(pid, new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString())
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }
}

export const sousStake = async (sousChefContract, amount, account) => {
  return sousChefContract.methods
    .deposit(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousStakeBnb = async (sousChefContract, amount, account) => {
  return sousChefContract.methods
    .deposit()
    .send({
      from: account,
      value: new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unstake = async (masterChefContract, pid, amount, account) => {
  if (pid === 6 || pid === 15 || pid === 16 || pid === 17) {
    return masterChefContract.methods
      .withdraw(pid, new BigNumber(amount).times(new BigNumber(10).pow(8)).toString())
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } else if (pid === 18 || pid === 27) {
    return masterChefContract.methods
      .withdraw(pid, new BigNumber(amount).times(new BigNumber(10).pow(9)).toString())
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } else if (pid === 21) {
    return masterChefContract.methods
      .withdraw(pid, new BigNumber(amount).times(new BigNumber(10).pow(6)).toString())
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } else {
    return masterChefContract.methods
      .withdraw(pid, new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }
}

export const sousUnstake = async (sousChefContract, amount, account) => {
  // shit code: hard fix for old CTK and BLK
  if (sousChefContract.options.address === '0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC') {
    return sousChefContract.methods
      .emergencyWithdraw()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }
  if (sousChefContract.options.address === '0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831') {
    return sousChefContract.methods
      .emergencyWithdraw()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }
  return sousChefContract.methods
    .withdraw(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousEmegencyUnstake = async (sousChefContract, amount, account) => {
  return sousChefContract.methods
    .emergencyWithdraw()
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const harvest = async (masterChefContract, pid, account) => {
  if (pid === 10000000) {
    return masterChefContract.methods
      .enterStaking('0')
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } else {
    return masterChefContract.methods
      .deposit(pid, '0')
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }
}

export const yieldhubharvest = async (yieldhubContract, account, kingsContract) => {
  return yieldhubContract.methods
    .getTokenReward('0x6207C9B872055822CC646dF590a273d152410d9e')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvest = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit('0')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvestBnb = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit()
    .send({ from: account, value: new BigNumber(0) })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}
