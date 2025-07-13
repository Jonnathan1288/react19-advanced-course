import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { useMenuStore } from "../../../store/menu-store";

export interface HookInterface {
    id: number;
    name: string;
    to: string;
}

export const CardListComponent = () => {
    const { setItemSelect } = useMenuStore();

    const urlImage =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAcfsdWMPB-aAabU0VpOlC5SrEr3qOe10bg&s";

    const hooks: HookInterface[] = [
        { id: 1, name: "useEffect", to: "use-effect" },
        { id: 2, name: "Images", to: `image?url=${urlImage}` },
        { id: 3, name: "Nested Route", to: "nested-route" },
        { id: 4, name: "APIs", to: "api" },
        { id: 5, name: "FORMS", to: "form" },
        { id: 6, name: "ZUSTAND", to: "zustand" },
        { id: 7, name: "SUPABSE", to: "todo-supabase" },
    ];

    return (
        <div className="flex  flex-col gap-4 m-2">
            {hooks.map((item, i) => (
                <Link
                    onClick={() => setItemSelect(item)}
                    to={item.to}
                    key={i}
                    className="group w-full bg-[#151515] p-5 rounded-xl border-3 border-[#333] flex justify-between hover:bg-[#1a1a1a] transition-colors duration-300 cursor-pointer"
                >
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <Icon
                        className="group-hover:text-[#e776f3]"
                        icon="weui:arrow-filled"
                        width="12"
                        height="24"
                    />
                </Link>
            ))}
        </div>
    );
};
