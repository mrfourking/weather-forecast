import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Tabpanel from '../../сomponents/TabPanel';

const Places = ({
  citiesList,
  coordsList,
  tabValue
}) => {

  return (
    <>
      <Tabpanel value={tabValue} index={0}>
        {
          citiesList.length > 0 ? (
            <Typography variant='h4' align='center'>
              Есть выбранные города
            </Typography>
          ) : (
            <Typography variant='h4' align='center'>
              Нет выбранных городов
            </Typography>
          )
        }
      </Tabpanel>
      <Tabpanel value={tabValue} index={1}>
        {
          coordsList.length > 0 ? (
            <Typography variant='h4' align='center'>
              Есть сохраненные координаты
            </Typography>
          ) : (
            <Typography variant='h4' align='center'>
              Нет сохраненных координат
            </Typography>
          )
        }
      </Tabpanel>
      <Fab
        color='primary'
        aria-label='add'
        sx={{
          position: 'fixed',
          bottom: 96,
          right: 16,
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

Places.propTypes = {
  citiesList: PropTypes.array,
  coordsList: PropTypes.array,
  tabValue: PropTypes.number.isRequired
};

export default Places;
