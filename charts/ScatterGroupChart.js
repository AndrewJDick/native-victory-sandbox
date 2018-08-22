import React from "react";
import { arrayOf, shape, instanceOf, number } from "prop-types";
import { VictoryScatter } from "victory-native";
import { Axis } from "./Axis";
import { Chart } from "./Chart";
import { Group } from "./Group";

export const ScatterGroupChart = ({ data, ...props }) => {
  return (
    <Chart
      scale={{ x: "time" }}
      domainPadding={{ x: [20, 0], y: [0, 50] }}
      {...props}
    >
      <Axis name="xAxis" tickType="date" />

      <Axis
        name="yAxis"
        gridType="primary"
        tickType="number"
        tickCount={3}
        crossAxis={false}
        dependentAxis
      />

      <Group>
        {data.map((dataSet, index) => (
          <VictoryScatter key={index} data={dataSet} />
        ))}
      </Group>
    </Chart>
  );
};

ScatterGroupChart.propTypes = {
  data: arrayOf(
    arrayOf(
      shape({
        x: instanceOf(Date),
        y: number
      })
    )
  )
};
