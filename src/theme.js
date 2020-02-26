import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
    '@global': {
    '*::-webkit-scrollbar': {
        backgroundColor: "rgba(0, 0, 0, 0)",
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0)',
    }
    },


  palette: {
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
