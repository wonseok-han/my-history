const titleColors = [
  "#ff0000",
  "#ffa500",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee",
];

const badgeColors = [
  "red",
  "orange",
  "yellow",
  "lightGreen",
  "cyan",
  "lightBlue",
  "violet",
];

export const getRandomColor = (type: "normal" | "badge" = "normal") =>
  type === "badge"
    ? badgeColors[Math.floor(Math.random() * badgeColors.length)]
    : titleColors[Math.floor(Math.random() * titleColors.length)];
