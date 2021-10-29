module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        lora: "'Lora', serif",
        mono: "'DM Mono', monospace",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
