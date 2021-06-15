import React from 'react'

import constant from '../constant.json'
import logo from '../images/logoMintWhite.png'

const { greetingStr, appNameStr } = constant.header

const headerStyle = {
  background: 'linear-gradient(180deg, #0E4B75 0%, #0D2145 100%)',
  height: '212px',
  fontSize: '64px',
  fontWeight: 'bold' as const,
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap' as const
}

const imageStyle = {
  width: '300px',
  height: 'auto',
  marginLeft: '36px',
  marginRight: '36px'
}

export function Header(): JSX.Element {
  return (
    <>
      <div style={headerStyle}>
        <div>{greetingStr}</div>
        <img style={imageStyle} src={logo} />
        <div>{appNameStr}</div>
      </div>
    </>
  )
}
