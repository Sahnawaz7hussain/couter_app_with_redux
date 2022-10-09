import * as types from "./actionTypes";

const increment_count = (data = 1) => {
  return { type: types.INCREMENT_COUNT, payload: data };
};
const decrement_count = (data = 1) => {
  return { type: types.DECREMENT_COUNT, payload: data };
};
export { increment_count, decrement_count };
