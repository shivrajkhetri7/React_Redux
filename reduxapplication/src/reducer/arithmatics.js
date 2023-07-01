let initialState = 0;
function arithmetic(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return (state += 1);
    case "DECREMENT":
      return (state -= 1);
    default:
      return initialState;
  }
}

export default arithmetic;
