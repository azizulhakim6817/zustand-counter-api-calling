import React from "react";
import { myCounerStore } from "../store/CounterStore";

const CounterShow = () => {
  const { count } = myCounerStore();
  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
};

export default CounterShow;
