/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "custom-blink": "blink 0.75s step-end infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out",
      },
      keyframes: {
        blink: {
          "0% 100%": { "border-color": "transparent" },
          "50%": { "border-color": "white" },
        },

        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
