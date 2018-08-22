import React, { PureComponent } from "react";
import { node, number } from "prop-types";
import { VictoryGroup } from "victory-native";
import {
  DEFAULT_CHART_HEIGHT,
  DEFAULT_CHART_WIDTH,
  springboardTheme
} from "./theme";

export class Group extends PureComponent {
  render() {
    const { children, height, width, ...otherProps } = this.props;
    return (
      <VictoryGroup
        height={height}
        width={width}
        theme={springboardTheme}
        {...otherProps}
      >
        {children}
      </VictoryGroup>
    );
  }
}

Group.propTypes = {
  children: node,
  height: number,
  width: number
};

Group.defaultProps = {
  height: DEFAULT_CHART_HEIGHT,
  width: DEFAULT_CHART_WIDTH
};
