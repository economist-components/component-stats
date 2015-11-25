import React from 'react';
import Stats from '.';

export default (
  <Stats
    title="United Kingdom"
    stats={[
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
    ]}
  />
);
