import React from 'react';

import ReactAux from '../../../hoc/ReactAux';

const orderSummary  = (props) => {

  const ingreidentsSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (<li key={igKey}>
              <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
              </li> );
    })
  return(
    <ReactAux>
      <h3>Your Order</h3>
      <p>A burger with the following ingredients:</p>
      <ul>
        {ingreidentsSummary}
      </ul>
      <p>Continue to checkout?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </ReactAux>
  );
};

export default orderSummary;