import React from "react";
import Button from "@mui/material/Button";
import { increment, decrement } from "../actions/CounterAction";
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

  return (
    <div
      sx={{
        background:"blue",
        display: "flex",
        flexDirection: "column",
      }}
      className="Counter"
    >
      <h2>{changeCount}</h2>
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
    </div>
  );
}
