import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './Button-styles';

const Button = (props) => {
    let buttonElement = null;
    const classes = useStyles(props);
    const {className, color, ariaLabel, onClick, } = props;
    console.log("props.buttonelement", props.buttonStyle)
    switch (props.buttonStyle) { // button, icon button, link
        case('iconButton'):
            buttonElement = 
            <IconButton 
                edge="start" 
                className={classes[className]} 
                color={color} aria-label={ariaLabel} 
                onClick={onClick}
            >
                {props.children}
            </IconButton>
            break;
        // case('link'):
        //     buttonElement = 
        //     <Button 
        //         className={classes[className]} 
        //         to={`/${link}`}
        //         color={color} 
        //         onClick={onClick}
                
        //     >{linkName}</Button>
        //     break;
        default: buttonElement = 
        <button>click</button>
    }

   
    return (
        <div>
            {buttonElement}
        </div>
    )
};

export default Button;