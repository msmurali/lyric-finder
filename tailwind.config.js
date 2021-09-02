module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
      backgroundImage: (theme) => ({
        header: `url(../src/asset/img/header.svg)`,
        footer: `url(../src/asset/img/footer.svg)`,
      }),
    },
  },
  variants: {
    extend: {
      boxShadow: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
};
