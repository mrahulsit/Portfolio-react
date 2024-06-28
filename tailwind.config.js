export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    margin:{
      '36rem':'36rem',
    },
    width:{
      '3.2rem':'3.2rem',
    },
    height:{
      '3.2rem':'3.2rem',
      '7vh' : '7vh'
    },
    z:{
      '-3':'-3',
    },
    screens: {
      'xs':'300px',

      'sm': '250px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
};
export const plugins = [];

