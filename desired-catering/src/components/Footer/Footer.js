import React from 'react';
import { useStyles } from './Footer-styles';
import { Phone, Facebook, Instagram } from '@material-ui/icons';
import { Grid } from "@material-ui/core";

const Footer = props => {
    const classes = useStyles(props);
    return (
            <footer className={classes.footer}>
                <Grid className={classes.menu}>
                    <a className={classes.a} href="https://www.instagram.com/chefheartburn/"><Instagram className={classes.icon}/> <span className={classes.icon}/> <span className={classes.span}>@chefheartburn</span></a>
                    <a className={classes.a} href="https://www.facebook.com/DesiredEatsAtx"><Facebook className={classes.icon}/> <span className={classes.icon}/> <span className={classes.span}>Desired Eats</span></a>
                    <a className={classes.a} href="tel:1-217-520-6180"><Phone className={classes.icon}/> <span className={classes.span}>217 520 6180</span></a>
                </Grid>
            </footer>
    )
};

export default Footer;