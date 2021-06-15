import React from 'react'

import constant from '../constant.json'
import { initBgDivStyle } from '../MainScene'
import { BackButton } from './Buttons'
import { PaymentCode } from './PaymentCode'

const { selectedStr } = constant.codeScreen

interface CodeScreenProps {
  coinSelection: string
  qrCodeValue: string
  setShowCodeScreen: Function
  setPauseAnimation: Function
  setBgDivStyle: Function
}

const codeScreenStyle = {
  textAlign: 'center' as const
}

const textStyle = {
  fontSize: '40px',
  fontWeight: 'bold' as const,
  marginTop: '36px',
  padding: '10px'
}

export function CodeScreen(props: CodeScreenProps): JSX.Element {
  const handleBackBtnClick = (): void => {
    props.setShowCodeScreen(false)
    props.setPauseAnimation(true)
    props.setBgDivStyle({ ...initBgDivStyle, display: 'inline' })
  }

  return (
    <>
      <div style={codeScreenStyle}>
        <div style={textStyle}>
          {selectedStr}
          {props.coinSelection}
        </div>
        <PaymentCode qrCodeValue={props.qrCodeValue} />
        <div>
          <BackButton label="BACK" handleClick={handleBackBtnClick} />
        </div>
      </div>
    </>
  )
}
