import chai from 'chai';
chai.should();

import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import StatsList from '..';

describe('StatsList', () => {

  it('is compatible with React.Component', () => {
    StatsList.should.be.a('function');
  });

  it('renders a React element', () => {
    React.isValidElement(<StatsList stats={[]} />).should.equal(true);
  });

  describe('Rendering', () => {

    const renderer = createRenderer();
    it('renders an empty list of statistics', () => {
      renderer.render(
        <StatsList
          stats={[]}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      renderOutput.type.should.equal('dl');
      renderOutput.props.children.should.be.empty;
    });

    it('renders a list of statistics', () => {
      renderer.render(
        <StatsList
          stats={[
            {
              key: 'Stat A',
              value: 'Value A',
            },
            {
              key: 'Stat B',
              value: 'Value B',
            },
          ]}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      renderOutput.should.deep.equal(
        <dl
          className="stats__list"
          itemProp="additionalProperty" itemScope itemType="http://schema.org/PropertyValue"
        >
          {[
            <dt key="stat-a-term" className="stats__stat-term stats__stat-stat-a-term">
              Stat A
            </dt>,
            <dd key="stat-a-value" className="stats__stat-description stats__stat-stat-a-value" itemProp="Stat A">
              Value A
            </dd>,
          ]}
          {[
            <dt key="stat-b-term" className="stats__stat-term stats__stat-stat-b-term">
              Stat B
            </dt>,
            <dd key="stat-b-value" className="stats__stat-description stats__stat-stat-b-value" itemProp="Stat B">
              Value B
            </dd>,
          ]}
        </dl>
      );
    });

  });

});
