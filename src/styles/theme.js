import { createTheme } from '@mui/material/styles';
const theme = createTheme({
   components:{
       MuiButton:{
           styleOverrides:{
               contained:{
                   background: 'primary',
               }
           }
       }
   },
   primary: {
    // Purple and green play nicely together.
    main: '#44a9e6',
  },
  secondary: {
    // This is green.A700 as hex.
    main: '#000',
  },
});
export default theme;
// 44a9e6