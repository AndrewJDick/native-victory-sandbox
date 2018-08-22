import React, { PureComponent } from 'react';
import { arrayOf, shape, instanceOf, number } from 'prop-types';
import { format } from 'date-fns';
import { VictoryBar, VictoryAxis } from 'victory-native';
import { Axis } from './Axis';
import { Chart } from './Chart';

const formatHorizontalLabel = t => {
  const month = format(t, 'MMM');
  const year = format(t, 'YY');
  return `${month}\n${year}`;
};

export class BarHorizontalChart extends PureComponent {
  render() {
    const { data, ...otherProps } = this.props;
    return (
      <Chart scale={{ y: 'time' }} {...otherProps}>
        <Axis
          name="xAxis"
          tickType="number"
          gridType="primary"
          crossAxis={false}
        />

        <VictoryAxis
          name="yAxis"
          dependentAxis
          invertAxis
          tickCount={data.length}
          tickFormat={t => formatHorizontalLabel(t)}
        />

        <VictoryBar horizontal={true} barRatio={0.9} data={data} />
      </Chart>
    );
  }
}

BarHorizontalChart.propTypes = {
  data: arrayOf(
    shape({
      x: instanceOf(Date),
      y: number,
    })
  ),
};
