const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts}",
  ],

  theme: {
    extend: {},
  },

  plugins: [require('@catppuccin/tailwindcss'), require('@tailwindcss/typography')],
};

module.exports = config;