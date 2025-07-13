import { useActiveHook } from "../hooks/active-hook";
import { ModalComponent } from "./modal-component";

type ColorType = "red" | "blue" | "green";
type VanillaType = { name: string; color?: ColorType };

export const Vanilla = ({ name, color }: VanillaType) => {
    const { state, handleToggle } = useActiveHook();
    return (
        <div>
            <h3>{name}</h3>
            <h3>{color}</h3>

            <button onClick={handleToggle}>{state ? "Hide" : "See"}</button>

            {state && <ModalComponent />}
        </div>
    );
};
