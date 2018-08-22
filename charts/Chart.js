import React, { PureComponent } from "react";
import { node, number } from "prop-types";
import { VictoryChart } from "victory-native";
import {
  springboardTheme,
  DEFAULT_CHART_HEIGHT,
  DEFAULT_CHART_WIDTH
} from "./theme";

export class Chart extends PureComponent {
  render() {
    const { children, height, width, ...otherProps } = this.props;
    return (
      <VictoryChart
        width={width}
        height={height}
        theme={springboardTheme}
        {...otherProps}
      >
        {children}
      </VictoryChart>
    );
  }
}

Chart.propTypes = {
  children: node,
  height: number,
  width: number
};

Chart.defaultProps = {
  height: DEFAULT_CHART_HEIGHT,
  width: DEFAULT_CHART_WIDTH
};
