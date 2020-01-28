import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(c => (
      <BuildControl 
        key={c.label} 
        label={c.label} 
        added={() => props.ingredientsAdded(c.type)}
        removed={() => props.ingredientsRemoved(c.type)}
        disabled={props.disabled[c.type]}/>
    ))}
    <button 
      className={classes.OrderButton}
      disabled={!props.purchasable}>Order here</button>
  </div>
)

export default buildControls;