import { Container, Grid, Link, Typography } from '@mui/material';
import { borderTop, Box } from '@mui/system';
import { useMemo } from 'react';

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear());
  return (
    <Grid
      container
      direction='column'
      sx={{
        minHeight: '80px',
        justifyContent: 'center',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderColor: 'text.disabled'
      }}
    >
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
    </Grid>
  );
};

export default Footer;
