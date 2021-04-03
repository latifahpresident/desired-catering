import { makeStyles } from '@material-ui/core/styles';
import {darkColor, white,  redAccentColor} from './../../global-styles/global-styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    iconColor: {
      color: `${redAccentColor}`,
      // color: "#B6613B",
  },
    title: {
      flexGrow: 1,
    },
 
    toolbar: {
        backgroundColor: `${darkColor}`,
        display: "flex",
        justifyContent: "space-between",
        // border: "1px solid teal",
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
      //   border: "1px solid orange",
      [theme.breakpoints.down('sm')]: {
        // justifyContent: "center",
        display: "none"
       },
        display: "flex",
        justifyContent: "space-between",
        width: "50%",
        
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
       },
    },
    home: {
        height: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },

    logo: {
      maxHeight: 50,
      height: 50,
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