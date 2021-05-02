module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        turquoise: "#1abc9c",
        "green-sea": "#16a085",
        emerald: "#2ecc71",
        nephirits: "#27ae60",
        "blue-river": "#3498db",
        "blue-hole": "#2980b9",
        ametist: "#9b59b6",
        wisteria: "#8e44ad",
        "black-asphalt": "#34495e",
        "midnight-blue": "#2c3e50",
        clouds: "#ecf0f1",
        silver: "#bdc3c7",
        concrete: "#95a5a6",
        sunflower: "#f1c40f",
        orange: "#f39c12",
        carrot: "#e67e22",
        alizarin: "#e74c3c",
        pomegranate: "#c0392b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
