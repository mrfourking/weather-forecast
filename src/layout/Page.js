
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';

const Page = ({ children }) => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }}
    >
      {children}
    </Container>
  );
};

Page.propTypes = {
  children: PropTypes.any
};

export default Page;
