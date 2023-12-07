import { Box, Typography } from '@mui/material'
import React from 'react'
import { BellDark } from '../custom-component/Icon'
import styled from '@emotion/styled'

const RootContainer = styled(Box)({
  borderRadius: "8.4px",
  background: "linear-gradient(90deg, rgba(71, 65, 109, 0.44) 0%, rgba(166, 163, 184, 0.83) 0.14%, #FBFBFB 102.66%)",
  boxShadow: "0px 0.7px 0.7px 0px rgba(0, 0, 0, 0.04), 0px 2.8px 7px 0px rgba(0, 0, 0, 0.04)",
  padding: 14,
  width: 189.7,
  height: 171.5,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  "& .card-text-save": {
    color: '#19191A',
    fontFamily: 'Inter',
    fontSize: '9.1px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '120%',
  },
  "& .card-text-1": {
    color: '#19191A',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '120%',
    minWidth: 100,
    maxWidth: 150,
    marginTop: 14,
    marginBottom: 15.5,
    height: 'fit-content'
  },
  "& .card-text-contant": {
    display: 'flex',
    justifyContent: 'space-between',
  },
  "& .gmail-contant": {
    borderRadius: '5.6px',
    border: "0.7px solid #D4D4D4",
    background: '#FFF',
    padding: "8.4px 11.2px"
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

const CardComponent = () => {
  return (
    <RootContainer>
      <Box className="card-text-contant">
        <BellDark />
        <Box>
          <Typography className='card-text-save'>Save</Typography>
        </Box>
      </Box>
      <Typography className='card-text-1'>We’ll be sending notifications to you here</Typography>
      <Box className="gmail-contant">
        <Typography className='gmail-text'>hello@gmail.com</Typography>
      </Box>
    </RootContainer>
  )
}

export default CardComponent