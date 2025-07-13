import { useState } from "react";

export const useActiveHook = () => {
    const [state, setState] = useState<boolean>(false);

    const handleToggle = () => setState((s) => !s);

    return { state, handleToggle };
};
