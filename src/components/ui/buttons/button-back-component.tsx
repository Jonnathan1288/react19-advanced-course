import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

export const ButtonBackComponent = () => {
    const navigate = useNavigate();

    // const handleNavigate = () => navigate(-1);
    const handleNavigate = () => navigate("/");

    return (
        <button
            onClick={handleNavigate}
            className="absolute top-4 left-4 bg-white text-black hover:bg-[#efeeee] p-3 rounded-full shadow-lg cursor-pointer"
        >
            <Icon icon="fluent:ios-arrow-24-filled" width="24" height="24" />
        </button>
    );
};
