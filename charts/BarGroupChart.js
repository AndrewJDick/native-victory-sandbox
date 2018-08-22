import React, { PureComponent } from 'react';
import { arrayOf, shape, instanceOf, number } from 'prop-types';
import { VictoryBar } from 'victory-native';
import { Axis } from './Axis';
import { Chart } from './Chart';
import { Group } from './Group';

export class BarGroupChart extends PureComponent {
  render() {
    const { data, ...otherProps } = this.props;
    return (
      <Chart
        scale={{ x: 'time' }}
        domainPadding={{ x: [20, 0], y: [0, 50] }}
        {...otherProps}
      >
        <Axis
          name="xAxis"
          crossAxis={false}
          tickType="date"
          gridType="primary"
        />

        <Axis
          name="yAxis"
          crossAxis={false}
          dependentAxis
          tickCount={2}
          tickType="number"
        />

        <Group offset={15}>
          {data.map((dataSet, index) => (
            <VictoryBar key={index} data={dataSet} />
          ))}
        </Group>
      </Chart>
    );
  }
}

BarGroupChart.propTypes = {
  data: arrayOf(
    arrayOf(
      shape({
        x: instanceOf(Date),
        y: number,
      })
    )
  ),
};
