module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      colors: {
        rollerOrange: '#FF6900',
        rollerOlive: '#90AF83',
        rollerGreenDark: '#1FC59E',
        rollerGreenLight: '#CDF9D0',
        rollerBlueDarkest: '#3D76BB',
        rollerBlueDark: '#3D84FF',
        rollerBlueLight: '#8CB7EA',
        rollerBlueLighter: '#CDDCF9',
        rollerGreyDark: '#D5D5D5',
        rollerGrey: '#EBEBEB',
        rollerGreyLight: '#F7F7F7',
        rollerButterDark: '#F9ECAA',
        rollerButterLight: '#FFFBE1',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
