import { createMuiTheme } from 'material-ui/styles';
import { red } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ABD7FA',
      main: '#ABD7FA',
      dark: '#ABD7FA',
      contrastText: 'white',
    },
    secondary: {
      light: '#0C7EF1',
      main: '#0C7EF1',
      dark: '#0C7EF1',
      contrastText: 'white',
    },
    error: red,
    background: {
      appBar: 'trasparent',
    },
  },
  typography: {
    fontFamily: 'Heebo',
    fontWeightRegular: '100',
  },
});

export default theme;
