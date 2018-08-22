import React, { PureComponent } from 'react';
import { arrayOf, shape, instanceOf, number } from 'prop-types';
import { VictoryBar, VictoryStack } from 'victory-native';
import { Axis } from './Axis';
import { Chart } from './Chart';

export class BarStackedChart extends PureComponent {
  render() {
    const { data, ...otherProps } = this.props;
    return (
      <Chart
        scale={{ x: 'time' }}
        domainPadding={{ x: [20, 0], y: [0, 50] }}
        {...otherProps}
      >
        <Axis name="xAxis" tickType="date" crossAxis={false} />

        <Axis
          name="yAxis"
          tickType="number"
          gridType="primary"
          dependentAxis
          crossAxis={false}
          tickCount={2}
        />

        <VictoryStack>
          {data.map((dataSet, index) => (
            <VictoryBar key={index} data={dataSet} />
          ))}
        </VictoryStack>
      </Chart>
    );
  }
}

BarStackedChart.propTypes = {
  data: arrayOf(
    arrayOf(
      shape({
        x: instanceOf(Date),
        y: number,
      })
    )
  ),
};
