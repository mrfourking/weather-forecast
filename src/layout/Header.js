
import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const Header = ({
  tabValue, 
  setTabValue
}) => {
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Grid
      container
      direction='column'
      sx={{
        color: '#fff',
        backgroundColor: 'primary.main',
      }}
    >
      <Container>
        <h1>Weather Forecast</h1>
      </Container>
      <Box>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='inherit'
          variant='fullWidth'
          centered
        >
          <Tab label='По городу' />
          <Tab label='По местоположению' />
        </Tabs>
      </Box>
    </Grid>
  );
};

Header.propTypes = {
  tabValue: PropTypes.number.isRequired,
  setTabValue: PropTypes.func.isRequired
};

export default Header;
