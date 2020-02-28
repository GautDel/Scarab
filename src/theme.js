import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#536dfe'
      },
      text: {
          primary: '#37474f',
          secondary: '#455a64',
          disabled: '#607d8b'
      },
      background: {
          default: '#ffe0b2',
          paper: "#fff8e1"
      },
  },
});

export default theme;
