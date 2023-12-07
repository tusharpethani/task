import React from 'react';
import Home from './page/Home';
import styled from '@emotion/styled';
import { Box } from '@mui/material';


const RootContainer = styled(Box)({
  "& .MuiTypography-root, .MuiButtonBase-root": {
    height: '100%',
    fontFamily: 'Inter',
    textTransform:"none"
  },
})

const App = () => {
  return (
    <RootContainer>
      <Home />
    </RootContainer>
  )
}

export default App