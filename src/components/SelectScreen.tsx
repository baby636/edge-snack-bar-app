import React from 'react'

import { tokenImages } from '../images/tokenIndex'

interface SelectScreenProps {
  usdToCoinRates: string[]
  handleOptionClick: Function
}

const optionGridDivStyle = {
  display: 'grid',
  maxWidth: '1140px',
  margin: 'auto',
  marginTop: 'max(2vh, 2rem)',
  grid: 'auto-flow min-content / auto auto auto auto',
  rowGap: 'max(2vh, 2rem)',
  justifyContent: 'space-evenly'
}

const optionDivStyle = {
  textAlign: 'center' as const
}

const iconStyle = {
  height: 'max(11vh, 6rem)',
  width: 'auto'
}

const labelStyle = {
  fontSize: 'max(2vh, 1rem)',
  fontWeight: 'bold' as const,
  marginTop: 'max(1vh, 0.5rem)',
  marginBottom: '0'
}

export function SelectScreen(props: SelectScreenProps): JSX.Element {
  const handleClick = (option): void => {
    props.handleOptionClick(option)
  }

  return (
    <>
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
    </>
  )
}
