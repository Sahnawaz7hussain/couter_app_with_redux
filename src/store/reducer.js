import * as types from "./actionTypes";

const initState = { count: 0 };

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case types.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - action.payload,
      };

    default:
      return state;
  }
};
export { counterReducer };
