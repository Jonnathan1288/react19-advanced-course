import { ButtonBackComponent } from "../components/ui/buttons/button-back-component";
import { useCounterStore } from "../store/counter-store";

const ZustandPage = () => {
    const { counter, increment, decrement } = useCounterStore();
    return (
        <>
            <ButtonBackComponent />

            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full text-center space-y-6">
                    <h1 className="text-2xl font-semibold text-gray-800">Zustand Counter</h1>
                    <div className="text-5xl font-bold text-indigo-600">{counter}</div>

                    <div className="flex justify-center gap-4">
                        <button
                            onClick={increment}
                            type="button"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                        >
                            Increment
                        </button>
                        <button
                            onClick={decrement}
                            type="button"
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                        >
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ZustandPage;
