import { Container, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useMemo } from 'react';

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear());
  return (
    <Box>
      <Container>
        <Typography variant='body2' color='text.secondary' align='center'>
          {'Copyright © '}
          <Link color='inherit' href='https://fourking.ru/' target='_blank' rel='noreferrer'>
            Ilya Fokin
          </Link>
          {' '}
          {currentYear}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
