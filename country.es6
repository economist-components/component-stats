import React, { PropTypes } from 'react';
import CountryHeader from './header';
import CountryStats from './stats';

function Country({ className = 'country', itemType = 'Country', title, stats = [], children }) {
  let headerEl = null;
  if (title) {
    headerEl = <CountryHeader title={title} />;
  }
  return (
    <section className={className} itemScope itemType={`http://schema.org/${itemType}`}>
      {headerEl}
      <CountryStats stats={stats} />
      <div className={`${className}__content`}>
        {children}
      </div>
    </section>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Country.propTypes = {
    className: PropTypes.string,
    itemType: PropTypes.string,
    ...(CountryHeader.propTypes || {}),
    ...(CountryStats.propTypes || {}),
    children: PropTypes.node,
  };
}

export default Country;
