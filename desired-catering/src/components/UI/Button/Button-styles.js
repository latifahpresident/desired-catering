import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
      
      [theme.breakpoints.up('md')]: {
          display: "none",
         },

        
    }, 
  
   
  }));

  export { useStyles }