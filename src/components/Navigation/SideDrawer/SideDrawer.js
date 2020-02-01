import React from 'react';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop';
import ReactAux from '../../../hoc/ReactAux/ReactAux';

import classes from './SideDrawer.module.css'

//using brackets because we want to do some JSX,
//before we return the html
const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <ReactAux>
      <Backdrop
        show={props.open}
        clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <Navigation />
        </nav>
      </div>
    </ReactAux>
  );
};

export default sideDrawer;