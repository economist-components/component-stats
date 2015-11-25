/* eslint react/no-multi-comp: 0 */
import React, { PropTypes } from 'react';

function codify(name = '') {
  return name.toLowerCase().replace(/[^a-z0-9]/g, (chars) => (chars.charCodeAt(0) === 32 ? '-' : ''));
}

function StatsHeader({ className, title, icon }) {
  let iconEl = null;
  if (icon) {
    iconEl = <div className={[ `${className}__header-icon`, `${className}__header-icon-${icon}`].join(' ')}></div>;
  }
  return (
    <header className={`${className}__header`}>
      <h1 className={`${className}__header-text`} itemProp="name">{title}</h1>
      {iconEl}
    </header>
  );
}

if (process.env.NODE_ENV !== 'production') {
  StatsHeader.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
  };
}

function StatsContent({ className, stats }) {
  return (
    <dl className={`${className}__content`} itemProp="additionalProperty" itemScope itemType="http://schema.org/PropertyValue">
      {
        stats.map(({ key, value }) => {
          const code = codify(key);
          return [
            <dt className={[ `${className}__stat-term`, `${className}__stat-${code}-term` ].join(' ')}>{key}</dt>,
            <dd className={[ `${className}__stat-description`, `${className}__stat-${code}-value` ].join(' ')} itemProp={key}>{value}</dd>,
          ]
        })
      }
    </dl>
  );
}

if (process.env.NODE_ENV !== 'production') {
  StatsContent.propTypes = {
    className: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
      })
    ).isRequired,
  };
}

function Stats({ itemType = 'Thing', className = 'stats', title, stats = [] }) {
  let headerEl = null;
  if (title) {
    headerEl = <StatsHeader className={className} title={title} />;
  }
  return (
    <aside className={className} itemScope itemType={`http://schema.org/${itemType}`}>
      {headerEl}
      <StatsContent className={className} stats={stats} />
    </aside>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Stats.propTypes = {
    itemType: PropTypes.string,
    ...(StatsHeader.propTypes || {}),
    ...(StatsContent.propTypes || {}),
  };
}

export default Stats;
