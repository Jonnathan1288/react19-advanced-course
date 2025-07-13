import { useState } from "react";

export const useCounterHook = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount((s) => s + 1);
    const decrement = () => setCount((s) => (s === 0 ? 0 : s - 1));

    return { increment, decrement, count };
};
