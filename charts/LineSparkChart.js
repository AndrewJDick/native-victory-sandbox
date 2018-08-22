import React from "react";
import { arrayOf, shape, number } from "prop-types";
import { VictoryLine, VictoryScatter } from "victory-native";
import { Group } from "./Group";
import { COLOR_PALETTE } from "./theme";

export const LineSparkChart = ({ data, ...props }) => {
  const chartColor = COLOR_PALETTE[2];
  const finalDataPoint = data.filter(
    (dataSet, index) => (index === data.length - 1 ? dataSet : undefined)
  );

  return (
    <Group height={250} {...props} domainPadding={{ x: 0, y: 20 }} {...props}>
      <VictoryLine
        interpolation="natural"
        data={data}
        style={{ data: { stroke: chartColor } }}
      />

      <VictoryScatter
        data={finalDataPoint}
        size={5}
        style={{ data: { fill: chartColor } }}
      />
    </Group>
  );
};

LineSparkChart.propTypes = {
  data: arrayOf(
    shape({
      x: number,
      y: number
    })
  )
};
