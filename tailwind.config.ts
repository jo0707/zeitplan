import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primaryOrange: {
          "50": "#fff3f1",
          "100": "#ffe4e0",
          "200": "#ffcdc5",
          "300": "#ffab9d",
          "400": "#ff7b65",
          "500": "#fe5e44",
          "600": "#ec3416",
          "700": "#c7280e",
          "800": "#a42510",
          "900": "#882414",
          "950": "#4a0f05",
        },
        darkBlue: {
          "50": "#eaf3ff",
          "100": "#d9e9ff",
          "200": "#bbd6ff",
          "300": "#91b9ff",
          "400": "#668fff",
          "500": "#4366ff",
          "600": "#2239ff",
          "700": "#1729eb",
          "800": "#1627bd",
          "900": "#1b2a94",
          "950": "#0e144a",
        },
      },
    },
  },
}
