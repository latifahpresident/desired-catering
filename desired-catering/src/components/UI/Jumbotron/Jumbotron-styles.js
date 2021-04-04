import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
        height: "100vh",
        width: "100vw",
        marginTop: "-2.8rem",
        [theme.breakpoints.down('lg')]: {
            display: "none",
        },
    }, 
    mobileMedia: {
        // height: "100vh",
        // width: "100vw",
        display: "none",
        [theme.breakpoints.down('lg')]: {
            display: "block",
            width: "100vw",
            // border: "1px solid green",
            marginTop: 56.22,
        },
    }
   
  }));

  export { useStyles }