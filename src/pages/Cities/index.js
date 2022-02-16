import React from 'react';
import PropTypes from 'prop-types';

const Cities = ({
  citiesList
}) => {
  return (
    <div>
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
