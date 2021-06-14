import React from 'react'

import { tokenImages } from '../images/tokenIndex'

interface SelectScreenProps {
  usdToCoinRates: string[]
  handleOptionClick: Function
}

const selectScreenStyle = {
  display: 'flex',
  justifyContent: 'center'
}

const optionGridDivStyle = {
  display: 'grid',
  width: '1206px',
  marginTop: '32px',
  grid: 'auto-flow min-content / 150px 150px 150px 150px',
  rowGap: '56px',
  justifyContent: 'space-between'
}

const optionDivStyle = {
  textAlign: 'center' as const
}

const iconStyle = {
  height: '150px',
  width: '150px'
}

const labelStyle = {
  fontSize: '24px',
  fontWeight: 'bold' as const,
  marginTop: '12px',
  marginBottom: '0'
}

export function SelectScreen(props: SelectScreenProps): JSX.Element {
  const handleClick = (option): void => {
    props.handleOptionClick(option)
  }

  return (
    <>
      <div style={selectScreenStyle}>
        <div style={optionGridDivStyle}>
          {props.usdToCoinRates
            .sort((a, b) => a.localeCompare(b))
            .map(option => (
              <div style={optionDivStyle} key={option}>
                <img
                  src={tokenImages[option]}
                  style={iconStyle}
                  onClick={() => handleClick(option)}
                />
                <br />
                <p style={labelStyle}>{option}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
