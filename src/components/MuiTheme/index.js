import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const backgroundPallete = {
  custom: {
    background: {
      10: "#f5f5f5",
      20: "#e0e0e0",
      30: "#c6c6c6",
      40: "#ababab",
      50: "#8d8d8d",
      60: "#4f4d4d",
      70: "#333333",
      80: "#262626",
      90: "#242424",
      100: "#1c1c1c",
    },
    text: {
      10: "#ffffff",
      20: "#6f6f6f",
      30: "#8d8d8d",
      40: "#c6c6c6",
      50: "#bfbfbf",
      60: "#3aa4f9",
      70: "#8d8d8d",
      80: "#222222",
      error: "#ff8389",
      link10: "#179ea7",
      link20: "#b48c5c",
    },
    div: {
      10: "#524c4c",
      20: "#686868",
    },
    button: {
      10: "#ea1c5f",
      20: "#d9d9d9",
      30: "#e5e5e5",
      40: "#ce1738",
      50: "#ee4564",
    },
    icon: {
      10: "#4f4f4f",
      20: "#c6c6c6",
      30: "#222222",
    },
    field: {
      10: "#262626",
      20: "#393939",
    },
    support: {
      10: "#ff4768",
      20: "#1dab45",
      30: "#f5c416",
      40: "#136ec2",
    },
    menu: {
      1: "#179EA7",
      2: "#ED2F6D",
      3: "#B48C5C",
      4: "#6E5FCC",
      5: "#6B5252",
      6: "#2B658F",
      7: "#5E5E5E",
    },
    cardicon: {
      10: "#ea1c5f",
      20: "#179ea7",
      30: "#4f89e1",
      40: "#c6c6c6",
    },
  },
};
// General MUI theme
const extTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "hsl(240, 48%, 47%)",
        },
        background: {
          paper: "hsl(240, 15%, 95%)",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "hsl(240, 90%, 70%)",
        },
        background: {
          paper: "hsl(210, 3%, 15%)",
        },
      },
    },
  },
});

export default extTheme;
