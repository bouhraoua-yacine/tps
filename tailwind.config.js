module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: ["Lato", "sans-serif"],
      secondary: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        accent: "#FFBD00",
        primary: "#03045E",
        secondary: "#0C3CBA",
        neutral: "#55609B",
        "btn-hover": "#FED04C",
      },
      backgroundImage: {
        "light-grad":
          "linear-gradient(264.21deg, #A9D9F0 34.87%, #AABFD8 99.64%)",
        "dark-grad": "linear-gradient(88.58deg, #03045E 0%, #080BF7 100%)",
        services:
          "linear-gradient(0deg,rgba(12, 60, 186, 0.7),rgba(12, 60, 186, 0.7)),url('/src/images/img-services-bg.webp')",
        dispo:
          "linear-gradient(0deg,rgba(12, 60, 186, 0.7),rgba(12, 60, 186, 0.7)),url('/src/images/img-dispo-bg.webp')",
      },
      content: {
        iconMarker: "url('/src/images/icon-input-marker.svg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
