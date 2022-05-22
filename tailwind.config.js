module.exports = {
  important: true,
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        taro: {
          darkest: '#1f103c',
          darker: '#331b64',
          dark: '#48268c',
          normal: '#5f33ba',
          light: '#7f4fe3',
          lighter: '#c2afe9',
          lightest: '#f0ebfa',
        },
        seasalt: {
          darkest: '#003033',
          darker: '#006266',
          dark: '#009499',
          normal: '#00c6ce',
          light: '#33fbff',
          lighter: '#97fcff',
          lightest: '#e9fcfc',
        },
        pepper: {
          darkest: '#000000',
          darker: '#444444',
          dark: '#666666',
          normal: '#888888',
          light: '#aaaaaa',
          lighter: '#f4f4f4',
          lightest: '#ffffff',
        },
        blackpepper: {
          normal: '#888888',
          lighter: '#F8F8F8',
        },
        matcha: {
          darker: '#2BAB7B',
          dark: '#35BE97',
          normal: '#43CFA2',
        },
        pandan: {
          darkest: '#005330',
          darker: '#007645',
          dark: '#00a460',
          normal: '#00c572',
          light: '#0cea8c',
          lighter: '#99f5ca',
          lightest: '#e1fff1',
        },
        shallot: {
          darkest: '#231e2e',
          darker: '#3d3450',
          dark: '#594d75',
          normal: '#6c608a',
          light: '#9a8db8',
          lighter: '#d5cfe3',
          lightest: '#ebe8f1',
        },
        chilli: {
          darkest: '#6b2000',
          darker: '#a03000',
          dark: '#cc3c00',
          normal: '#ff5f1d',
          light: '#fd8d62',
          lighter: '#ffbea4',
          lightest: '#fff2ec',
        },
        paprika: {
          darkest: '#570011',
          darker: '#830119',
          dark: '#c70226',
          normal: '#ff2750',
          light: '#ff6686',
          lighter: '#ffc4d5',
          lightest: '#ffeef3',
        },
        turmeric: {
          darkest: '#603600',
          darker: '#a65c00',
          dark: '#e68c00',
          normal: '#ffb000',
          light: '#ffd066',
          lighter: '#ffe098',
          lightest: '#fff8e9',
        },
        grey: {
          light: '#fbfbfb',
        },
      },
      width: {
        105: '26.25rem',
        'company-text': '13.75rem',
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
    },
  },
  plugins: [],
}
