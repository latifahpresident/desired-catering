import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './Jumbotron-styles';

const Jumbotron = (props) => {
    const classes = useStyles(props);
    return (
        <React.Fragment>
                <CardMedia
                component='video'
                className={classes.mobileMedia}
                image={props.video}
                autoPlay
                controls
                muted
                playsInline
                loop
            />  
        </React.Fragment>
        
    )
};

export default Jumbotron;