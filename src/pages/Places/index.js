import React from 'react';
import PropTypes from 'prop-types';
import Tabpanel from '../../сomponents/TabPanel';
import { Typography } from '@mui/material';

const Places = ({
  citiesList,
  coordsList,
  tabValue
}) => {

  return (
    <div>
      <Tabpanel value={tabValue} index={0}>
        {
          citiesList.length > 0 ? (
            <Typography variant='h2' align='center'>
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
            <Typography variant='h2' align='center'>
              Есть сохраненные координаты
            </Typography>
          ) : (
            <Typography variant='h4' align='center'>
              Нет сохраненных координат
            </Typography>
          )
        }
      </Tabpanel>

    </div>
  );
};

Places.propTypes = {
  citiesList: PropTypes.array,
  coordsList: PropTypes.array,
  tabValue: PropTypes.number.isRequired
};

export default Places;
