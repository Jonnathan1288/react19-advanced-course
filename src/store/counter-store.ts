import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CounterInterface {
    counter: number,
    increment: () => void,
    decrement: () => void,
    restart: () => void
}

// export const useCounterStore = create<CounerInterface>((set) => ({
//     counter: 0,
//     increment: () => set((s) => ({ counter: s.counter + 1 })),
//     decrement: () => set((s) => ({ counter: s.counter === 0 ? s.counter : s.counter - 1 })),
//     restart: () => set({ counter: 0 })
// }));

export const useCounterStore = create<CounterInterface>()(
    persist(
        (set) => ({
            counter: 0,
            increment: () => set((s) => ({ counter: s.counter + 1 })),
            decrement: () => set((s) => ({ counter: s.counter === 0 ? s.counter : s.counter - 1 })),
            restart: () => set({ counter: 0 })
        }),
        {
            name: "counter-storage"
        }
    )
);