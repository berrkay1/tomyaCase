/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        headerBg:
          "url('https://www.tomya.com/assets/img/subpages/sub/aboutus-banner-icons.svg')",
      },
      boxShadow: {
        cartShodow: "0 15px 60px 0 rgba(50,46,127,.17)",
      },
      flex: {
        0: "0 0 50%",
        33: "0 0 33.3%",
        66: "0 0 66.6%",
      },
      container: {
        screens: {
          xs: "576",
          sm: "640px",
          md: "768px",
          lg: "991px",
          xl: "1230px",
        },
      },
      screens: {
        xs: "576",
        sm: "640px",
        md: "768px",
        lg: "991px",
        xl: "1230px",
      },
      spacing: {
        xs: "576",
        sm: "640px",
        md: "768px",
        lg: "991px",
        xl: "1230px",
      },
    },
  },
  plugins: [],
};
