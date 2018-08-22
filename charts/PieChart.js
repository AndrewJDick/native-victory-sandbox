import React from "react";
import { arrayOf, shape, string, number } from "prop-types";
import { VictoryPie } from "victory-native";
import { Axis } from "./Axis";
import { Chart } from "./Chart";
import { springboardTheme } from "./theme";

export const PieChart = ({ data, ...props }) => (
  <Chart theme={springboardTheme} {...props}>
    <VictoryPie data={data} labels={() => null} />

    <Axis
      style={{
        tickLabels: { fill: "transparent" }
      }}
    />
  </Chart>
);

PieChart.propTypes = {
  data: arrayOf(
    shape({
      name: string,
      x: number,
      y: number
    })
  )
};
