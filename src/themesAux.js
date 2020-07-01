import { createMuiTheme } from '@material-ui/core'

const defaultTheme = createMuiTheme()
const { breakpoints } = defaultTheme

export default createMuiTheme({
  ...defaultTheme,
  palette: {
    background: {
      main: '#fff',
      dark: '#333'
    },
    primary: {
      main: '#2c57a6',
      almostLight: '#6097CA',
      light: '#94D8EE',
      lighter: '#CFF1FC'
    },
    secondary: {
      main: '#bcdc9f',
      light: '#8BC63E',
      lighter: '#B4D67D',
      dark: '#669b55'
    },
    terciary: {
      main: '#D0842E'
    },
    table: {
      main: '#126E87',
      light: '#6AACB8',
      lighter: '#BCE0E5',
      background: '#94D8EE'
    },
    activity: {
      correct: '#669b55',
      incorrect: '#ff0000'
    }
  },
  typography: {
    lineHeight: 1.2
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: '0.9rem',
        lineHeight: '1',
        [breakpoints.up('sm')]: {
          fontSize: '0.9rem'
        },
        [breakpoints.up('md')]: {
          fontSize: '1rem'
        },
        [breakpoints.up('lg')]: {
          fontSize: 'calc(0.95vw + 0.95vh)'
        },
        [breakpoints.up(1800)]: {
          fontSize: 'calc(1.1vw + 1.1vh)'
        }
      },
      body2: {
        fontSize: '0.7rem',
        lineHeight: '1',
        [breakpoints.up('sm')]: {
          fontSize: '0.85rem'
        },
        [breakpoints.up('md')]: {
          fontSize: '0.95rem'
        },
        [breakpoints.up('lg')]: {
          fontSize: '1.05rem'
        },
        [breakpoints.up('xl')]: {
          fontSize: '1.25rem'
        }
      },
      body3: {

      },
      h1: {
        fontSize: '2rem',
        [breakpoints.up('sm')]: {
          fontSize: '2.4rem'
        },
        [breakpoints.up('md')]: {
          fontSize: '3rem'
        },
        [breakpoints.up('lg')]: {
          fontSize: '3.5rem'
        },
        [breakpoints.up('xl')]: {
          fontSize: '5rem'
        }
      },
      h2: {
        fontSize: '3rem',
        [breakpoints.up('sm')]: {
          fontSize: '3rem'
        },
        [breakpoints.up('md')]: {
          fontSize: '2.75rem'
        },
        [breakpoints.up('lg')]: {
          fontSize: '2.75rem'
        },
        [breakpoints.up('xl')]: {
          fontSize: '6.75rem'
        }
      },
      h3: {
        fontSize: '2.5rem',
        [breakpoints.up('sm')]: {
          fontSize: '2.75rem'
        },
        [breakpoints.up('md')]: {
          fontSize: '2.5rem'
        },
        [breakpoints.up('lg')]: {
          fontSize: '2.5rem'
        },
        [breakpoints.up('xl')]: {
          fontSize: '6.5rem'
        }
      },
      h4: {
        fontSize: '2rem',
        [breakpoints.up('sm')]: {
          fontSize: '2.5rem'
        },
        [breakpoints.up('md')]: {
          fontSize: '2.25rem'
        },
        [breakpoints.up('lg')]: {
          fontSize: '2.25rem'
        },
        [breakpoints.up('xl')]: {
          fontSize: '6.25rem'
        }
      },
      h5: {
        fontSize: '2.25rem',
        [breakpoints.up('sm')]: {
          fontSize: '2rem'
        },
        [breakpoints.up('md')]: {
          fontSize: '2rem'
        },
        [breakpoints.up('lg')]: {
          fontSize: '2rem'
        },
        [breakpoints.up('xl')]: {
          fontSize: '6rem'
        }
      },
      h6: {
        fontSize: '1.1rem',
        [breakpoints.up('sm')]: {
          fontSize: '1.2rem'
        },
        [breakpoints.up('md')]: {
          fontSize: '1.3rem'
        },
        [breakpoints.up('lg')]: {
          fontSize: '1.4rem'
        },
        [breakpoints.up('xl')]: {
          fontSize: '2rem'
        }
      }
    }
  }
})
