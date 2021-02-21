import { createMuiTheme } from '@material-ui/core';
import { deepPurple, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: deepPurple[500],
        },
        secondary: {
            main: green[500],
        },
    },
});

export default theme;
