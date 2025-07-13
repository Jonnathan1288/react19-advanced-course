import { useEffect, useState } from "react";
import { ButtonBackComponent } from "../components/ui/buttons/button-back-component";

export const UseEffectPage = () => {
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <ButtonBackComponent />
            <div className="h-screen bg-amber-100 text-black flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-6">useEffectPage</h2>
                <div className="w-48 h-48 rounded-full bg-white border-8 border-[#121212] flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-semibold">{seconds}</span>
                </div>
            </div>
        </>
    );
};
