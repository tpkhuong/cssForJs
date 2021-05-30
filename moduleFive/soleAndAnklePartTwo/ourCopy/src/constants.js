export const COLORS = {
  white: "hsl(0deg 0% 100%)",
  gray: {
    100: "hsl(185deg 5% 95%)",
    300: "hsl(190deg 5% 80%)",
    500: "hsl(196deg 4% 60%)",
    700: "hsl(220deg 5% 40%)",
    900: "hsl(220deg 3% 20%)",
  },
  primary: "hsl(340deg 65% 47%)",
  secondary: "hsl(240deg 60% 63%)",
  black: `hsl(0, 0%,0%)`,
  red: "hsl(0,100%,50%)",
};

export const BREAKPOINTS = {
  phoneMin: 37.5,
  tabletMin: 59.375,
  laptopMin: 81.25,
};

export const QUERIES = {
  phoneAndUp: `(min-width: ${BREAKPOINTS.phoneMin}rem)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}rem)`,
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

/***** josh solution *****/

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
/***** josh solution *****/
