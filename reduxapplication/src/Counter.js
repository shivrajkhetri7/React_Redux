import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "./actions";

function Counter() {
  const state = useSelector((state) => state.arithmetic);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>{state}</h1>
      <button className="btn-success" onClick={() => dispatch(Increment())}>
        Increment
      </button>
      <button className="btn-danger" onClick={() => dispatch(Decrement())}>
        Decrement{" "}
      </button>
    </div>
  );
}

export default Counter;
