import { NavLink, Outlet } from "react-router-dom";
import { ButtonBackComponent } from "../components/ui/buttons/button-back-component";

export type ChildType = {
    id: number;
    name: string;
    to: string;
    refId?: number;
};

export const NestedRoutePage = () => {
    const children: ChildType[] = [
        {
            id: 1,
            name: "Profile",
            to: "profile/",
            refId: 1,
        },
        {
            id: 2,
            name: "Setting",
            to: "setting",
        },
    ];

    const buildTo = (item: ChildType): string => {
        let full = item.to;
        if (item.refId) full += item.refId;
        return full;
    };

    return (
        <>
            <div className="p-6 max-w-3xl mx-auto space-y-6">
                <header className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-gray-900">👤 User Panel</h2>
                    <ButtonBackComponent />
                </header>

                <nav className="flex flex-wrap justify-center gap-3">
                    {children.map((item, i) => (
                        <NavLink
                            key={i}
                            to={buildTo(item)}
                            className={({ isActive }) =>
                                isActive
                                    ? "px-4 py-2 rounded-full bg-indigo-600 text-white font-medium shadow transition-all"
                                    : "px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-100 transition-all"
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                <section className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <Outlet />
                </section>
            </div>
        </>
    );
};
