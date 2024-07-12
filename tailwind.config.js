/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Comic-Sans": ['"Comic Sans"', "sans-serif"],
      },
      backgroundImage: {
        "design-process-bg": "url(/design_process_bg.svg)",
        "hero-hover-bg": "url(/hero_hover_bg.svg)",
      },
      screens: {
        mbMini: "280px",
        mbXSmall: "400px",
        mbMedSmall: "500px",
        mbSmall: "600px",
        mbMedium: "800px",
        laptop: "1000px",
        tbPortrait: "1200px",
        tbMed: "1400px",
        tbLandscape: "1600px",
        Desktop: "2000px",
        lgDesktop: "2400px",
      },
    },
  },
  plugins: [],
};
