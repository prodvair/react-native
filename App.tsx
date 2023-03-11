import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import Component from "./components/MyComponent";

import "@rneui/themed";

declare module "@rneui/themed" {
  export interface Colors {
    background2: string;
  }
}

const theme = createTheme({
  lightColors: {
    primary: "#6358EB",
    secondary: "#B27FF5",
    background: "#EFF2F9",
    background2: "#FFFFFF",
    white: "#2F2F2F",
    success: "#89B989",
    warning: "#F5D778",
  },
  darkColors: {
    primary: "#6358EB",
    secondary: "#B27FF5",
    background: "#161F3E",
    background2: "#0A112B",
    white: "#FEFFFF",
    success: "#89B989",
    warning: "#F5D778",
  },
  mode: "dark",
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
}
