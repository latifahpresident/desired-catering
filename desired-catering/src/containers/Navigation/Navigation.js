import React, { useState } from 'react';
import Navigation from './../../components/Navigation/NavigationItems';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setOpen(!open);
      };

    return (
        <React.Fragment>
            <Navigation toggleMenu={toggleMenu} open={open}/>
        </React.Fragment>
    )
};

export default Nav;
