export default defineAppConfig({
  ui: {
    primary: "primaryOrange",
    gray: "slate",
    button: {
      variant: {
        solid: "rounded shadow-xl shadow-{color}-300/50 hover:shadow-{color}-300/50 hover:shadow-lg transition",
        outline:
          "rounded shadow-xl bg-{color}-100 shadow-{color}-100/20 hover:shadow-{color}-300/50 hover:bg-{color}-300 hover:text-{color}-100 hover:shadow-lg transition",
      },
    },
    card: {
      shadow: "shadow-xl shadow-gray-400/20",
    },
  },
})
