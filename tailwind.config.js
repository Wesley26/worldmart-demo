/**
 *  TailwindCSS config file. Leave purge enabled: false for now.
 */

module.exports = {
  purge: {
    enabled: true,
    content: [ "./*.js" ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
