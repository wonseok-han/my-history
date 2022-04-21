const titleColors = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee",
];

export const getRandomColor = () =>
  titleColors[Math.floor(Math.random() * titleColors.length)];
