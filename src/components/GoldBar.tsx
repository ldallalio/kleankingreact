import React from 'react'

type Props = {}

const GoldBar = (props: Props) => {
  return (
    <div
        style={{
            backgroundColor: 'gold',
            height: '50px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
        }}
    ></div>
  )
}

export default GoldBar