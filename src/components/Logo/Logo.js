import React from 'react';
//Import images like this because we're using webpack
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div 
  className={classes.Logo} 
  style={{height: props.height}}>
    <img 
    src={burgerLogo} 
    alt="MyBurger-logo" />
  </div>
);

export default logo;