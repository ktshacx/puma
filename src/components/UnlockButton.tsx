import React from 'react'
import { Button, useWalletModal } from 'pulsepumaui'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import styled, { keyframes } from 'styled-components'

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
const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <Button
      variant="theme"
      style={{
        background:
          'linear-gradient(210deg, rgb(0, 156, 170), rgb(0, 85, 170) 25%, rgb(85, 0, 170) 50%, rgb(153, 16, 153) 75%, rgb(128, 0, 0))',
      }}
      onClick={onPresentConnectModal}
      {...props}
    >
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
