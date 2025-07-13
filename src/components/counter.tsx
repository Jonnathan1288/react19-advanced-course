import { useCounterHook } from "../hooks/counter-hook";
import { Vanilla } from "./vanilla";

export const Counter = () => {
    const { count, increment, decrement } = useCounterHook();

    const actions: string[] = ["FirstModel", "SecondModel", "Other"];

    return (
        <>
            <div>Result: {count}</div>
            <div style={{ margin: "20px" }}>
                <button onClick={increment}>Increment</button>

                <button onClick={decrement}>Decrement</button>
            </div>

            {actions.map((item, i) => (
                <div key={i}>
                    <Vanilla name={item} color="red" />
                </div>
            ))}
        </>
    );
};
