import { Box, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const Tabpanel = ({
  value,
  index,
  children
}) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

Tabpanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.any
};

export default Tabpanel;
