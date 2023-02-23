import React from "react";
import Button from "@mui/material/Button";
import { increment, decrement, reset } from "../actions/CounterAction";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const changeCount = useSelector((state) => state.countChange.count);
  const dispatch = useDispatch();
  console.log(changeCount);
  const IncrementFunc = () => {
    dispatch(increment());
  };
  const DecrementFunc = () => {
    dispatch(decrement());
  };

  const ResetFunc = () => {
    dispatch(reset());
  };

  return (
    <div className="counter">
      <h1>{changeCount}</h1>
      <div className="button">
        <Button
          onClick={IncrementFunc}
          className="incrementButton"
          sx={{ margin: "10px" }}
          variant="contained"
          color="success"
        >
          Increment
        </Button>
        <Button
          className="decrementButton"
          onClick={DecrementFunc}
          sx={{ margin: "10px" }}
          variant="contained"
          color="error"
        >
          Decrement
        </Button>
        <Button
          className="ResetButton"
          onClick={ResetFunc}
          sx={{ margin: "10px" }}
          variant="contained"
          color="secondary"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
