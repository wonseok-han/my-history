const theme = {
  white: "#ffffff",
  purple: "#3f3cbb",
  midnight: "#121063",
  metal: "#565584",
  tahiti: "#3ab7bf",
  // silver: "#ecebff",
  "bubble-gum": "#ff77e9",
  bermuda: "#78dcca",
};

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
  "lime",
  "lightskyblue",
  "lightcoral",
  "purple",
  "pink",
];

export const getRandomColor = (type: "normal" | "badge" = "normal") =>
  type === "badge"
    ? badgeColors[Math.floor(Math.random() * badgeColors.length)]
    : Object.values(theme)[
        Math.floor(Math.random() * Object.keys(theme).length)
      ];
