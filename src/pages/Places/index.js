import React from 'react';
import PropTypes from 'prop-types';
import Tabpanel from '../../сomponent/TabPanel';

const Cities = ({
  citiesList
}) => {

  return (
    <div>
      <Tabpanel value={value} index={0}>
        Item One
      </Tabpanel>
      <Tabpanel value={value} index={1}>
        Item Two
      </Tabpanel>
      {
        citiesList.length > 0 ? (
          <h2>Список городов</h2>
        ) : (
          <p>Нет выбранных городов</p>
        )
      }
    </div>
  );
};

Cities.propTypes = {
  citiesList: PropTypes.array
};

export default Cities;
