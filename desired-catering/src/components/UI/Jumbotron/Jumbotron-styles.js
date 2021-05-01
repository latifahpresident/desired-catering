import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mobileMedia: {
        height: "100vh",
        // border: "5px solid hotpink",
        zIndex: 1,
        marginTop: ".65rem",
        [theme.breakpoints.down('lg')]: {
            height: "100%",
            width: "100%",
            marginTop: "3.64rem",
            // border: "1px solid green",
        },
    }
   
  }));

  export { useStyles }