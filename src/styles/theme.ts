import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  color: {
    gray: {
      "50": "#181b23",
      "100": "#1f2029",
      "200": "#353646",
      "300": "#4b4d63",
      "400": "#616480",
      "500": "#797d9a",
      "600": "#9699b0",
      "700": "#b3b5c6",
      "800": "#d1d2dc",
      "900": "#eeeef2",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
});
