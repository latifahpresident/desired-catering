import { makeStyles } from '@material-ui/core/styles';
import {darkColor, white,  redAccentColor,  } from './../../global-styles/global-styles';
const useStyles = makeStyles((theme) => ({
    appBar: {
      // border: "4px solid black",
     
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      background: `${darkColor}`,

      [theme.breakpoints.down('xs')]: {
        // border: "3px solid hotpink",
        width: "100%"
    },
    },
    iconColor: {
      color: `${white}`,
  },

    toolbar: {
        backgroundColor: `${darkColor}`,
        display: "flex",
        justifyContent: "space-between",
        // border: "2px solid teal",
        padding: 0,
        overflow: "hidden",
        width: "100%",
        "& .MuiToolbar-gutters": {
          padding: 0,
          
        },
        [theme.breakpoints.down('md')]: {
          // border: "1px solid hotpink",
          padding: "0 1rem",
          width: "90%",
      },
      [theme.breakpoints.down('xs')]: {
          // border: "1px solid hotpink",
          padding: "0 1rem",
          width: "100%",
      },
    },
    menu: {
      //   border: "1px solid white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "20%",
        [theme.breakpoints.down('sm')]: {
          display: "none",
         },
    },
    linkContainer: {
        // border: "1px solid orange",
      [theme.breakpoints.down('sm')]: {
        // justifyContent: "center",
        display: "none"
       },
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        
    },
    link: {
        "&:hover": {
            color: `${redAccentColor}`,
        },
      [theme.breakpoints.down('sm')]: {
         display: "none",
        },
    },
    homeBtn: {
      display: "none",
      [theme.breakpoints.down('sm')]: {
        display: "block",
        paddingRight: "1.5rem"
       },
    },
    home: {
        height: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        cursor: "pointer",
    },

    logo: {
      maxHeight: 60,
      height: 60,
    },
    order: {
      [theme.breakpoints.down('xs')]: {
        display: "none",
       },
        border: `1.2px solid white`,
        width: "10%",
        display: "flex",
        justifyContent: "center",
        color: `${white}`,
       
    },
    orderBtn: {
      color: `${white}`,
      textAlign: "center",
     
    },
    a: {
        textDecoration: "none",
        color:`${white}`,
    },
    mobileIcons: {
      //   border: "1px solid white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "20%",
        [theme.breakpoints.up('sm')]: {
          display: "none",
         },
    },
  }));

  export { useStyles }