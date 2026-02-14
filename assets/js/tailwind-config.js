tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1979cc",
        "primary-dark": "#0f5b9e",
        "accent-red": "#FF0800",
        "accent-green": "#10b981",
        "background-light": "#f6f7f8",
        "background-dark": "#0B0F14",
        "surface-dark": "#161f27",
        "surface-highlight": "#1e2933",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px -5px rgba(25, 121, 204, 0.3)",
        "glow-hover": "0 0 25px -5px rgba(25, 121, 204, 0.6)",
        "glow-red": "0 0 20px -5px rgba(255, 8, 0, 0.4)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
};
