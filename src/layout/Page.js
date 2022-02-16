
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';

const Page = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

Page.propTypes = {
  children: PropTypes.any
};

export default Page;
