
import { Grid } from '@mui/material';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Page from '../layout/Page';
import Cities from '../pages/Cities';

const App = () => {
  const [cities] = useState([]);
  return (
    <Grid
      container
      direction='column'
      sx={{
        minHeight: '100vh'
      }}
    >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          flexGrow: 1
        }}
      >
        <Page>
          <Routes>
            <Route path='/' element={<Cities citiesList={cities} />} />
            {/* <Route path='about' /> */}
          </Routes>
        </Page>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;
