import { makeStyles } from '@material-ui/core/styles';
import { background, white} from "./../../../global-styles/global-styles";

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
      
      [theme.breakpoints.up('md')]: {
          display: "none",
         },

        
    }, 
    submitBtn: {
      backgroundColor: `${background}`,
      color: `${white}`
    }
   
  }));

  export { useStyles }