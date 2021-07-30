import { makeStyles } from '@material-ui/core/styles';
import { orangeAccentColor, white } from "./../../../global-styles/global-styles";

const useStyles = makeStyles((theme) => ({
    root: {
           //   border: "3px solid green",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 640,
      backgroundColor: `${orangeAccentColor}`,
      flexDirection: 'column',
    //   background: 'radial-gradient(#fac915,#a31b17, #3b0904)',     
       [theme.breakpoints.down('lg')]: {
        // border: "1px solid hotpink",
       },
      [theme.breakpoints.down('md')]: {
        // border: "1.5px solid limegreen",
       },
      [theme.breakpoints.down('sm')]: {
        height: 1550,
       
       },
    },
    title: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        // border: "1px solid red",
        alignSelf: "flex-start",
        padding: "0 1.5rem",
        marginBottom: "2.25rem",
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
        border: `.2px solid ${white}`,
        backgroundColor: `${white}`,
        marginRight: ".5rem"
    },
    h4: {
        color: `${white}`,
        lineHeight: 1.5,
        fontWeight: 500,
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 17
        },
        
      
    },
    h1: {
        fontSize: "2.75rem",
        lineHeight: 1.4,
        fontWeight: "bold",
        maxWidth: 520,
        // marginBottom: "2.25rem",
        color: `${white}`,
        [theme.breakpoints.down('sm')]: {
            fontSize: 35
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 28,
            alignSelf: "flex-start"
        },
    },
    imageWrapper: {
        // border: "1px solid white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid white",
        },
    },
    imageCard: {
        // border: "1px solid red",
        width: "20%",
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        borderRadius: "3rem",
        [theme.breakpoints.down('sm')]: {
           marginBottom: "2rem",
           width: "80%",
        },
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: ".5rem",

    }
}));

export { useStyles }
