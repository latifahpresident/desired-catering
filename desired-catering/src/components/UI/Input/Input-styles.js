import { withStyles, makeStyles, } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: `${white}`,
      },
      '&:hover .MuiInput-underline': {
        borderBottomColor: "orange",
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
          
        },
        '&:hover fieldset': {
          borderColor: 'white',
          color: `${white}`,
          borderBottomColor: "orange",
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
            color: `${white}`,
        },
      
        // '&:placeholder': {
        //   color: "white",
        // },
      },  
      '&:hover fieldset': {
        borderColor: 'white',
      },
    },
    // '&:placeholder': {
    //   color: "white",
    // },
    // input: {
    //   '&:placeholder': {
    //     color: "white",
    //   },
    // }
  })(TextField);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      border: "1px solid white",
      width: "50%",
      margin: "0 auto",
      justifyContent: "space-between",
      color: `${white}`,
    },
    margin: {
      margin: theme.spacing(1),
      width: "40%",
      color: `${white}`,
      // '&:placeholder': {
      //   color: `${white}`,
      // },
      '&:hover': {
        color: `${white}`
      }
    },
    input: {
      color: "white",
      '&:placeholder': {
        color: "white",
  
      },
    }
  }));

  export { useStyles, CssTextField}