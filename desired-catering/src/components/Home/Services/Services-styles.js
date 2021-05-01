import { makeStyles } from '@material-ui/core/styles';
import servicesBackgroundImage from "./../../../assets/images/keith-misner-h0Vxgz5tyXA-unsplash.jpg";
import { white, darkColor, transparentBackground, } from "./../../../global-styles/global-styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundImage: 'url(' + servicesBackgroundImage + ')',
        // border: "1px solid black",
        backgroundColor: "white",
        zIndex: 2,
        height: 800,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            height: "auto",
        },
    },
    header: {
        color: `${white}`,
        // border: "1px solid green",
        fontSize: "3rem",
        fontWeight: 800,
        marginBottom: "5rem",
    },
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            // border: "3px solid white",
            flexWrap: "wrap",
            width: "95%",
        },
       
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            // border: "1px solid blue",
            flexDirection: "column",
        },
        width: "100%",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
        width: "40%",
        alignSelf: "center",
        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden",
        [theme.breakpoints.down('md')]: {
            width: "45%",
            margin: "1rem",
        },
       [theme.breakpoints.down('xs')]: {
            width: "95%",
            // border: "1px solid orange",
            margin: "1rem 0",
        },

        "&:hover": {
            transform: 'scale(1.06)',
        }
    },
    title: {
        position: "absolute",
        backgroundColor: `${transparentBackground}`,
        // border: "1px solid hotpink",
        width: "100%",
        height: 67,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
    },
    },
    h1: {
        color: `${white}`,
        // border: "1px solid green",
        fontSize: 18,
        fontWeight: 800,
    },
    imgContainer: {
    //  border: "1px solid hotpink",

        width: "100%",
        height: "100%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
    },
    img: {
        width: "100%",
        height: 403,
        margin: "0 auto",
    },
    overlay: {
        position: "absolute",
        bottom: 0,
        background: "#ffffff99",
        color: `${darkColor}`, 
        width: "93.7%",
        transition: ".5s ease",
        opacity: 0,
        fontSize: "20px",
        padding: "20px",
        textAlign: "center",
        height: 362.7,
        // border: "1px solid green",
        "&:hover": {
            opacity: .9,
        }
      },
      overlayh1: {
        color: `${darkColor}`,
    },
  }));

  export { useStyles }