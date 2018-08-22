import React, { PureComponent } from "react";
import { arrayOf, shape, instanceOf, number } from "prop-types";
import { VictoryArea } from "victory-native";
import { Axis } from "./Axis";
import { Chart } from "./Chart";
import { Group } from "./Group";
import { MIN_Y_VALUE } from "./AreaGroupChart.mock";

export class AreaGroupChart extends PureComponent {
  render() {
    const { data, ...otherProps } = this.props;

    return (
      <Chart
        scale={{ x: "time" }}
        minDomain={{ y: MIN_Y_VALUE }}
        {...otherProps}
      >
        <Axis name="xAxis" crossAxis={false} tickType="date" />

        <Axis
          name="yAxis"
          dependentAxis
          tickCount={2}
          crossAxis={false}
          tickType="number"
          gridType="primary"
        />

        <Group>
          {data.map((dataSet, index) => (
            <VictoryArea key={index} data={dataSet} />
          ))}
        </Group>
      </Chart>
    );
  }
}

AreaGroupChart.propTypes = {
  data: arrayOf(
    arrayOf(
      shape({
        x: instanceOf(Date),
        y: number
      })
    )
  )
};
