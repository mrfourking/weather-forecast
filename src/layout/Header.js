import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Box sx={{
      display: 'flex',
      color: '#fff',
      backgroundColor: 'primary.main',
    }}
    >
      <Container>
        <h1>Weather Forecast</h1>
        
      </Container>
    </Box>
  );
};

export default Header;
