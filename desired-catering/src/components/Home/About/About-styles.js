import { makeStyles } from '@material-ui/core/styles';
import { accentColor, background } from "./../../../global-styles/global-styles";
import pineappleImage from "./../../../assets/images/pineappledish.png";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      boxSizing: "border-box",
    //   border: "3px solid green",
      width: "100%",
    //   position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-3rem",
      [theme.breakpoints.down('lg')]: {
        // border: "1px solid hotpink",
       },
      [theme.breakpoints.down('md')]: {
        // border: "1.5px solid limegreen",
       },
      [theme.breakpoints.down('sm')]: {
        // border: "2px solid teal",
       
       },
      
    },
    container: {
        display: "flex",
        alignItems: "center",
        width: "50%",
        flexDirection: "column",
        justifyContent: "center",
        // border: "1px solid red",
        backgroundColor: `${accentColor}`,
        overflow: "hidden",
        height: 550,
        // [theme.breakpoints.down('md')]: {
        //     width: "100%",
        //     border: "1px solid silver",

        // },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            // height: 400,
        },
    },
    content: {
        //  border: "2px solid brown",
        width: "100%",
        margin: "0 auto",
        // position: "relative",
        // zIndex: 1,       
        [theme.breakpoints.down('md')]: {
            padding: "0 2.625rem",
            // border: "2px solid black",
        },
        [theme.breakpoints.down('sm')]: {
            padding: 0,
        },
    },
    wrapper: {
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        // border: "2px solid hotpink",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            width: "100%",
            margin: "0 auto",
        },
    },
    title: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        // border: "1px solid red",
        alignSelf: "flex-start",
        padding: "0 1.5rem",
        [theme.breakpoints.down('xs')]: {
            marginTop: "5rem",
        },
    },
    tagline: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid teal",
        [theme.breakpoints.down('xs')]: {
            width: 350,
            justifyContent: "flex-start",
        },
    },
    line: {
        width: 30,
        border: `.2px solid ${background}`,
        backgroundColor: `white`,
        marginRight: ".5rem"
    },
    h4: {
        color: `${background}`,
        lineHeight: 1.5,
        fontWeight: 500,
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 17
        },
        
      
    },
    words: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        [theme.breakpoints.down('md')]: {
            width: "85%",
            // border: "1px solid white",
            justifyContent: "center",
            alignSelf: "flex-start"
        },
        [theme.breakpoints.down('sm')]: {
            width: "85%",
            // border: "1px solid white",
            justifyContent: "center",
            alignSelf: "center"
        },
    },
    h1: {
        fontSize: "2.75rem",
        lineHeight: 1.4,
        fontWeight: "bold",
        maxWidth: 520,
        marginBottom: "2.25rem",
        color: `white`,
        [theme.breakpoints.down('sm')]: {
            fontSize: 35
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 28,
            alignSelf: "flex-start"
        },
    },
    p: {
        fontSize: "1.125rem",
        marginBottom: "1rem",
        fontWeight: 400,
        color: `white`, 
        textAlign: "justify",
        lineHeight: 1.5,
        padding: "0 1.5rem",
        // border: "1px solid red",
        [theme.breakpoints.down('md')]: {
            textAlign: "left"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
        },
       
    },

    img: {
        // border: "1px solid hotpink",
        backgroundImage: 'url(' + pineappleImage + ')',
        height: 550,
        width: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
        zIndex: -100,
        [theme.breakpoints.down('md')]: {
            marginRight: "5rem",
            width: "100%",
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            
            margin: 0,
            height: 400,
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
    },
  }));

  export { useStyles }