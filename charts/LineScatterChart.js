import React from "react";
import { arrayOf, shape, instanceOf, number } from "prop-types";
import { VictoryLine, VictoryScatter } from "victory-native";
import { Axis } from "./Axis";
import { Chart } from "./Chart";
import { COLOR_PALETTE } from "./theme";

export const LineScatterChart = ({ data, ...props }) => {
  const chartColor = COLOR_PALETTE[6];

  return (
    <Chart
      scale={{ x: "time" }}
      domainPadding={{ x: [20, 0], y: [0, 50] }}
      {...props}
    >
      <Axis
        name="yAxis"
        dependentAxis
        tickCount={3}
        crossAxis={false}
        tickType="number"
        gridType="primary"
      />

      <Axis name="xAxis" tickType="date" crossAxis={false} />

      <VictoryLine
        interpolation="natural"
        data={data}
        style={{ data: { stroke: chartColor } }}
      />

      <VictoryScatter
        data={data}
        size={5}
        style={{ data: { fill: chartColor } }}
      />
    </Chart>
  );
};

LineScatterChart.propTypes = {
  data: arrayOf(
    shape({
      x: instanceOf(Date),
      y: number
    })
  )
};
