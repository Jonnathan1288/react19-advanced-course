import { useParams } from "react-router-dom";

export const ProfilePage = () => {
    const { id } = useParams();
    return (
        <div>
            <span>Profile page : {id}</span>
        </div>
    );
};
