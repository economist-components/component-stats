import React from 'react';
import Country from './country';
import StatsList from '.';

const countryStats = [
  {
    key: 'GDP growth',
    value: '2.2%',
  },
  {
    key: 'GDP per head',
    value: '$44,580 (PPP: $41,500)',
  },
  {
    key: 'Inflation',
    value: '1.5%',
  },
  {
    key: 'Budget balance (% GDP)',
    value: '-3.9',
  },
  {
    key: 'Population',
    value: '64.9m',
  },
];
export default (
  <div>
    <h1>Country Example</h1>
    <Country
      title="United Kingdom"
      stats={countryStats}
    >
      <p>Blah blah blah.</p>
      <p>Blah blah blah.</p>
      <p>Blah blah blah.</p>
      <p>Blah blah blah.</p>
    </Country>
    <h1>Stats Example</h1>
    <StatsList stats={countryStats} />
  </div>
);
