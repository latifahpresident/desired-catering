import React from 'react';
import {Link,} from "react-router-dom";
import { useStyles } from './Navigation-styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuDrawer from './../UI/Menu/Menu';
import IconButton from './../UI/Button/Button';
import Button from '@material-ui/core/Button';
import { Menu, Phone, Facebook, Instagram } from '@material-ui/icons';
import { Grid } from "@material-ui/core";
import logo from './../../assets/images/FontLogoBlkBG.jpg';

const Nav = props => {
    const classes = useStyles(props);
    const { toggleMenu, open } = props;
    return (
        <div className={classes.root}>
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <IconButton className="menuButton"  aria-label="menu" color="inherit" onClick={toggleMenu(true)} buttonStyle="iconButton">
                    <Menu className={classes.iconColor}/>
                </IconButton>
                <Grid className={classes.menu}>
                    <Phone/>
                        <a className={classes.a} href="tel:1-707-590-5355">707 590 5355</a>
                    <Facebook/>
                    <Instagram/>
                </Grid>
                <Grid className={classes.linkContainer}>
                    <Button className={classes.link} component={Link} to="/services" color="inherit">Services</Button>
                    <Button className={classes.link} component={Link} to="/about" color="inherit">About</Button>
                    <Grid className={classes.home} onClick={() => props.history.push("/")}><img className={classes.logo} src={logo} alt="desire catering"/></Grid>
                    <Button className={classes.link} component={Link} to="/gallery" color="inherit">Gallery</Button>
                    <Button className={classes.link} component={Link} to="/contact" color="inherit">Contact</Button>
                </Grid>
                <Grid className={classes.homeBtn} onClick={() => props.history.push("/")}><img className={classes.logo} src={logo} alt="desire catering"/></Grid>
                <Grid className={classes.order}>
                    <Button className={classes.orderBtn}>
                        Order
                    </Button>
                        </Grid>
                <Grid className={classes.mobileIcons}>
                    <Instagram/>
                    <a className={classes.a} href="tel:1-707-590-5355"><Phone/></a>
                </Grid >
            </Toolbar>
        </AppBar>
        <MenuDrawer toggleMenu={toggleMenu} open={open}/>
    </div>
    )
};

export default Nav;