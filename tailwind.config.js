/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "custom-blink": "blink 0.75s step-end infinite",
      },
      keyframes: {
        blink: {
          "0% 100%": { "border-color": "transparent" },
          "50%": { "border-color": "white" },
        },
      },
    },
  },
  plugins: [],
};
