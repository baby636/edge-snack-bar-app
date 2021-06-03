import QRCode from 'qrcode.react'
import React from 'react'

interface PaymentCodeProps {
  qrCodeValue: string
}

const paymentCodeStyle = {
  border: '1px solid rgba(0, 0, 0, 0.5)',
  borderRadius: '32px',
  display: 'inline-block',
  padding: '35px',
  marginTop: '8px',
  marginBottom: '42px'
}

export function PaymentCode(props: PaymentCodeProps): JSX.Element {
  return (
    <div style={paymentCodeStyle}>
      <QRCode value={props.qrCodeValue} size={476} />
    </div>
  )
}
