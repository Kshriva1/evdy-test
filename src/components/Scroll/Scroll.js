/* This component contains each memorial as a child and provides scrollable property */

import React,{Fragment} from 'react';

const Scroll = (props) => {
  return (
  	<Fragment>
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '500px'}}>
      {props.children}
    </div>
    </Fragment>
  );
};

export default Scroll;