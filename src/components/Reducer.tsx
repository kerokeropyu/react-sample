import { useReducer } from "react";

type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET";

// 現在の状態とactionに基づいて次の状態を返す
const reducer = (currenetCount: number, action: Action) => {
  switch (action) {
    case "INCREMENT":
      return currenetCount + 1;
    case "DECREMENT":
      return currenetCount - 1;
    case "DOUBLE":
      return currenetCount * 2;
    case "RESET":
      return 0;
    default:
      return currenetCount;
  }
};

type CounterProps = {
  initialValue: number;
};

const Counter = (props: CounterProps) => {
  const [count, dispach] = useReducer(reducer, props.initialValue);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispach("DECREMENT")}>-</button>
      <button onClick={() => dispach("INCREMENT")}>+</button>
      <button onClick={() => dispach("DOUBLE")}>*2</button>
      <button onClick={() => dispach("RESET")}>RESET</button>
    </div>
  );
};

export default Counter;
