import React, { PropTypes } from 'react';
import StatsList from '.';

function CountryStats({ className = 'country', stats = [] }) {
  return (
    <aside className={`${className}__stats`}>
      <StatsList stats={stats} />
    </aside>
  );
}

if (process.env.NODE_ENV !== 'production') {
  CountryStats.propTypes = {
    ...(StatsList.propTypes || {}),
  };
}

export default CountryStats;
