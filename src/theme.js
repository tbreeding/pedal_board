import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import * as Colors from 'material-ui/styles/colors'


// Create a theme instance.
const theme = createMuiTheme({
  palette: {
		primary: {
			main: Colors.grey700,
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#c0d5d3',
		},
		accent1Color: Colors.orange900,
	},
	typography: {
    useNextVariants: true,
    fontFamily: '"Oxygen", "Roboto", "Helvetica", "Arial", sans-serif',
	},
});

export default theme;
