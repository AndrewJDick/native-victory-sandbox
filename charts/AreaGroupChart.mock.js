export const MIN_Y_VALUE = 250000;

const areaOneData = [
  { x: new Date(2018, 0, 1), y: MIN_Y_VALUE },
  { x: new Date(2018, 1, 1), y: 500000 },
  { x: new Date(2018, 2, 1), y: 400000 },
  { x: new Date(2018, 3, 1), y: 475000 },
  { x: new Date(2018, 4, 1), y: 750000 },
];

const areaTwoData = [
  { x: new Date(2018, 0, 1), y: MIN_Y_VALUE },
  { x: new Date(2018, 1, 1), y: 350000 },
  { x: new Date(2018, 2, 1), y: 300000 },
  { x: new Date(2018, 3, 1), y: 675000 },
  { x: new Date(2018, 4, 1), y: 340000 },
];

export const groupAreaData = [areaOneData, areaTwoData];
