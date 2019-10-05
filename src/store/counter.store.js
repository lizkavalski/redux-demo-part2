const initialState = { count: 0 };

export default(state=initialState, action)=> {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
// return the 'action' in an object
export const increment = () => {
  return({type:'INCREMENT'})
};

export const decrement = () => {
  return({type:'DECREMENT'})
};