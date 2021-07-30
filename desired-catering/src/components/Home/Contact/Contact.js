import React from "react";
import { Grid, Typography, } from "@material-ui/core";
import { useStyles } from "./Contact-styles";
import Button from "./../../UI/Button/Button";

const Contact = (props) => {
    const classes = useStyles(props)
    return (
        <Grid className={classes.root}>
            <Typography className={classes.h1} component="h1">Let Desired Eats Catering organize your special event</Typography>
            <Typography component="p" className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel tincidunt est. Lorem ipsum dolor sit amet.</Typography>
            <form className={classes.form}>
                {props.form}
            </form>
            {/* TODO: Add SUBMIT BUTTON */}
            <Button className="submitBtn"  aria-label="contact-us"  buttonStyle="submitButton">Contact Now</Button>
        </Grid>
    )
};
export default Contact;