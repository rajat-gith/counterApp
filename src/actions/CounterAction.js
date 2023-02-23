import { INCREMENT, DECREMENT } from "../constants/CounterConstants";

export const increment = () => async (dispatch) => {
  dispatch({
    type: INCREMENT,
  });
};

export const decrement = () => async (dispatch) => {
  dispatch({
    type: DECREMENT,
  });
};
