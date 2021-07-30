import { makeStyles } from '@material-ui/core/styles';
import {  white, accentColor } from "./../../../global-styles/global-styles";


const useStyles = makeStyles((theme) => ({
    root: {
    //   border: "3px solid green",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 500,
      backgroundColor: `${accentColor}`,
      [theme.breakpoints.down('lg')]: {
        // border: "1px solid hotpink",
       },
      [theme.breakpoints.down('md')]: {
        // border: "1.5px solid limegreen",
       },
      [theme.breakpoints.down('xs')]: {
        justifyContent: "flex-start",
       
       },
      flexDirection: "column",
    },
    h1: {
        lineHeight: 1.4,
        fontWeight: "bold",
        marginBottom: "2rem",
        color: `${white}`,
        // border: "1px solid red",
        width: "70%",
        fontSize: 44,
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: 35
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 28,
            width: "100%",
            marginTop: "5rem"
        },
    },
    p: {
        fontSize: "1.125rem",
        marginBottom: "1rem",
        fontWeight: 400,
        color: `${white}`, 
        textAlign: "justify",
        lineHeight: 1.5,
        padding: "0 1.5rem",
        // border: "1px solid red",
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
        },
        // [theme.breakpoints.down('xs')]: {
        //     fontSize: 14,
        // },
    },
    form: {
        // border: "1px solid white",
        color: "white",
        width: "70%",
        display: "flex",
        justifyContent: "space-around",
        marginTop: "2rem",
        marginBottom: "5rem",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            width: "100%",
            // border: "1px solid black",
            height: 150,
            marginTop: 0,
            // marginBottom: "5rem"
        },
    }
  }));
  export { useStyles }