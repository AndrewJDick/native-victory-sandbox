import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  AreaGroupChart,
  BarGroupChart,
  BarHorizontalChart,
  BarStackedChart,
  LineScatterChart,
  LineSparkChart,
  PieChart,
  ScatterGroupChart
} from "./charts";

import { Card, List, Container } from "./App.styles";

/* Mock Data */
import { groupAreaData } from "./charts/AreaGroupChart.mock";
import { groupBarData } from "./charts/BarGroupChart.mock";
import { horizontalBarData } from "./charts/BarHorizontalChart.mock";
import { stackedBarData } from "./charts/BarStackedChart.mock";
import { scatterLineData } from "./charts/LineScatterChart.mock";
import { sparkLineData } from "./charts/LineSparkChart.mock";
import { pieData } from "./charts/PieChart.mock";
import { scatterData } from "./charts/ScatterGroupChart.mock";

const mockCharts = [
  { component: AreaGroupChart, data: groupAreaData },
  { component: BarGroupChart, data: groupBarData },
  { component: BarHorizontalChart, data: horizontalBarData },
  { component: BarStackedChart, data: stackedBarData },
  { component: LineScatterChart, data: scatterLineData },
  { component: LineSparkChart, data: sparkLineData },
  { component: PieChart, data: pieData },
  { component: ScatterGroupChart, data: scatterData }
];

const CHART_PADDING = 16;

export default class App extends React.Component {
  state = {
    cardDimension: null,
    isLoading: true
  };

  handleChartResize = event => {
    const { width } = event.nativeEvent.layout;
    this.setState({
      cardDimension: width - CHART_PADDING,
      isLoading: false
    });
  };

  render() {
    const { cardDimension, isLoading } = this.state;
    const animationThreshold = 2;

    return (
      <Container>
        <List
          initialNumToRender={animationThreshold}
          keyExtractor={(item, index) => `${index}`}
          data={mockCharts}
          renderItem={({ item: chart, index }) => {
            const { component: Component, data } = chart;
            return (
              <Card onLayout={this.handleChartResize}>
                {!isLoading && (
                  <Component
                    data={data}
                    width={cardDimension}
                    height={cardDimension}
                    style={{
                      parent: {
                        paddingLeft: CHART_PADDING,
                        paddingRight: CHART_PADDING
                      }
                    }}
                  />
                )}
              </Card>
            );
          }}
        />
      </Container>
    );
  }
}
