import { useNavigate } from "react-router-dom";

export const useNavigateHook = () => {
    const navigate = useNavigate();

    const handleNavigate = (path?: string) => navigate(path ?? "/");

    return { handleNavigate };
};
