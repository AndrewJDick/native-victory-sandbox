export const DEFAULT_CHART_WIDTH = 400;
export const DEFAULT_CHART_HEIGHT = 400;

// Colors
export const COLOR_PALETTE = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
];

export const randomChartColor = () =>
  COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];

// Layout
export const baseProps = {
  padding: 50,
  colorScale: COLOR_PALETTE
};

// Animation
const defaultAnimateProps = {
  duration: 1000,
  onLoad: { duration: 1000 }
};

// Labels
const baseLabelStyles = {
  padding: 10,
  fill: "#666",
  fontFamily: "ProximaNova-SemiBold",
  fontSize: 13,
  letterSpacing: "normal"
};

const centeredLabelStyles = {
  ...baseLabelStyles,
  textAnchor: "middle"
};

export const springboardTheme = {
  area: {
    ...baseProps,
    interpolation: "natural",
    style: {
      data: {
        fill: randomChartColor(),
        fillOpacity: 0.7,
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    }
  },
  axis: {
    ...baseProps,
    style: {
      axis: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 1
      },
      axisLabel: {
        ...centeredLabelStyles,
        padding: 25
      },
      grid: {
        fill: "transparent",
        stroke: "transparent",
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        stroke: "transparent",
        size: 1
      },
      tickLabels: baseLabelStyles
    }
  },
  bar: {
    ...baseProps,
    cornerRadius: 2,
    style: {
      data: {
        fill: d =>
          d.index <= COLOR_PALETTE.length - 1
            ? COLOR_PALETTE[d.index]
            : "#001fff",
        padding: 8,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  },
  chart: {
    ...baseProps,
    animate: {
      ...defaultAnimateProps
    },
    domainPadding: {
      x: 0,
      y: [0, 20]
    }
  },
  group: {
    ...baseProps,
    animate: {
      ...defaultAnimateProps
    }
  },
  line: {
    ...baseProps,
    style: {
      data: {
        fill: "none",
        stroke: randomChartColor(),
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    }
  },
  pie: {
    ...baseProps,
    colorScale: COLOR_PALETTE,
    style: {
      data: {
        padding: 10,
        stroke: "#fff",
        strokeWidth: 1
      },
      labels: {
        ...baseLabelStyles,
        padding: 20
      }
    }
  },
  scatter: {
    ...baseProps,
    style: {
      data: {
        fill: randomChartColor(),
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  },
  stack: {
    ...baseProps,
    colorScale: COLOR_PALETTE
  }
};
