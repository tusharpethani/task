import { Box, Typography } from '@mui/material'
import React from 'react'
import { DownArrow, Property, True } from '../custom-component/Icon'
import styled from '@emotion/styled'

const RootContainer = styled(Box)({
  borderRadius: "8.4px",
  background: "linear-gradient(90deg, #D9D9D9 0%, #B6B6B6 75.04%, #767677 100%)",
  boxShadow: "0px 0.7px 0.7px 0px rgba(0, 0, 0, 0.04), 0px 2.8px 7px 0px rgba(0, 0, 0, 0.04)",
  padding: 14,
  width: 189.7,
  height: 171.5,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  "& .card-true-icon": {
    borderRadius: '4.2px',
    background: '#0071E3',
    width: 14,
    height: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  "& .card-text-1": {
    color: '#19191A',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '120%',
    minWidth: 100,
    maxWidth: 180,
    marginTop: 55.3,
    marginBottom: 18.8,
    height: 'fit-content'
  },
  "& .card-text-contant": {
    display: 'flex',
    justifyContent: 'space-between',
  },
  "& .dropdown-contant": {
    borderRadius: '2.8px',
    background: 'rgba(229, 229, 230, 0.50)',
    padding: "4.2px",
    gap: 2.8,
    display: 'flex',
    width: 'fit-content',
  },
  "& .gmail-text": {
    color: '#19191A',
    fontFamily: 'Inter',
    fontSize: '9.1px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '120%',
  }
})

const CardComponentSecond = () => {
  return (
    <RootContainer>
      <Box className="card-text-contant">
        <Property />
        <Box className='card-true-icon'>
          <True />
        </Box>
      </Box>
      <Typography className='card-text-1'>Notify me when any wallets move more than</Typography>
      <Box className="dropdown-contant">
        <Typography className='gmail-text'>$1,000.00</Typography>
        <DownArrow />
      </Box>
    </RootContainer>
  )
}

export default CardComponentSecond