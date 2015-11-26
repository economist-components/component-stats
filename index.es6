import React, { PropTypes } from 'react';
import { codify } from './utils';

function StatsList({ className = 'stats', stats = [] }) {
  return (
    <dl
      className={`${className}__list`}
      itemProp="additionalProperty" itemScope itemType="http://schema.org/PropertyValue"
    >
      {
        (stats || []).map(({ key, value }) => {
          const code = codify(key);
          return [
            <dt
              key={`${code}-term`}
              className={[ `${className}__stat-term`, `${className}__stat-${code}-term` ].join(' ')}
            >
              {key}
            </dt>,
            <dd
              key={`${code}-value`}
              className={[ `${className}__stat-description`, `${className}__stat-${code}-value` ].join(' ')}
              itemProp={key}
            >
              {value}
            </dd>,
          ];
        })
      }
    </dl>
  );
}

if (process.env.NODE_ENV !== 'production') {
  StatsList.propTypes = {
    className: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
      })
    ).isRequired,
  };
}

export default StatsList;
