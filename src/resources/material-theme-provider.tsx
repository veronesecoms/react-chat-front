import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8351a2',
      main: '#542673',
      dark: '#270047',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffff60',
      main: '#d3d925',
      dark: '#9ea800',
      contrastText: '#fff',
    },
  },
});

export default theme
