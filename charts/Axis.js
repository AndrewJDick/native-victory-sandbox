import React from "react";
import numeral from "numeral";
import { oneOf } from "prop-types";
import { format } from "date-fns";
import { LineSegment, VictoryAxis } from "victory-native";

const formatLabel = (tick, formatType) => {
  const formatTypes = {
    date: format(tick, "MMM"),
    number: formatNumber(tick)
  };

  return formatType ? formatTypes[formatType] : tick;
};

const formatNumber = value => {
  const number = Number(value);

  if (isNaN(number)) {
    throw Error(`formatNumber expects a number but received \`${value}\``);
  }

  if (number >= 10000) {
    return numeral(number).format("0.[0]a");
  }

  return numeral(number).format("0,0.[0]");
};

/**
 * We need to extend Victory's Axis component, otherwise it renders
 * the default axis on top of our custom component.
 */
export class Axis extends VictoryAxis {
  render() {
    const { gridType, tickType, ...props } = this.props;
    return (
      <VictoryAxis
        {...props}
        tickFormat={t => formatLabel(t, tickType)}
        gridComponent={
          gridType === "primary" ? (
            <LineSegment style={{ fill: "grey", stroke: "grey" }} />
          ) : (
            undefined
          )
        }
      />
    );
  }
}

Axis.propTypes = {
  gridType: oneOf(["primary"]),
  tickType: oneOf(["date", "number"])
};
