import React from 'react';

import {connect} from 'react-redux';

import * as actions from '../store/counter.store.js'

function Counter(prop){
  return (
    <>
      <button onClick={prop.dec}>-</button>
      <span>{prop.counter.count}</span>
      <button onClick={prop.inc}>+</button>
    </>
  );
}
  
const mapStatetoProps = (state)=>({
  counter:state.counter
})

const mapDispatchtoProps = (dispatch, getState)=>({
  inc:()=>dispatch(actions.increment()),
  dec:()=>dispatch(actions.decrement())
  
})

export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);
