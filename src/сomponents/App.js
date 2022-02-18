import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Grid from '@mui/material/Grid'; 

import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Page from '../layout/Page';
import Places from '../pages/Places';

const App = () => {
  const [cities] = useState([]);
  const [coords] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  return (
    <Grid
      container
      direction='column'
      sx={{
        minHeight: '100vh'
      }}
    >
      <Grid item xs={12}>
        <Header tabValue={tabValue} setTabValue={setTabValue} />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        }}
      >
        <Page>
          <Routes>
            <Route path='/' element={<Places citiesList={cities} coordsList={coords} tabValue={tabValue} />} />
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
