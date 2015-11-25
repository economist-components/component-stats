/* eslint react/no-multi-comp: 0 */
import React, { PropTypes } from 'react';

function codify(name) {
  return name.replace(/[^a-z0-9]/g, function(s) {
    const c = s.charCodeAt(0);
    if (c == 32) return '-';
    if (c >= 65 && c <= 90) return '_' + s.toLowerCase();
    return '__' + ('000' + c.toString(16)).slice(-4);
  }).toLowerCase();
}

function StatsHeader({ className, title, icon }) {
  let iconEl = null;
  if (icon) {
    iconEl = <div className={[ `${className}__header-icon`, `${className}__header-icon-${icon}`].join(' ')}></div>;
  }
  return (
    <header className={`${className}__header`}>
      <h1 className={`${className}__header-text`}>{title}</h1>
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
    <dl className={`${className}__content`}>
      {
        stats.map(({ key, value }) => {
          const code = codify(key);
          return [
            <dt className={[ `${className}__stat-term`, `${className}__stat-${code}-term` ].join(' ')}>{key}</dt>,
            <dd className={[ `${className}__stat-description`, `${className}__stat-${code}-value` ].join(' ')}>{value}</dd>,
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

function Stats({ className = 'stats', title, stats = [] }) {
  let headerEl = null;
  if (title) {
    headerEl = <StatsHeader className={className} title={title} />;
  }
  return (
    <aside className={className}>
      {headerEl}
      <StatsContent className={className} stats={stats} />
    </aside>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Stats.propTypes = {
    ...(StatsHeader.propTypes || {}),
    ...(StatsContent.propTypes || {}),
  };
}

export default Stats;
