import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#536dfe'
      },
      text: {
          primary: '#263238',
          secondary: '#455a64',
          disabled: '#607d8b'
      },
      background: {
          default: '#ffe0b2',
          paper: "#fff3e0"
      },
  },
});

export default theme;
