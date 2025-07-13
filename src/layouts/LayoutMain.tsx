import { Outlet } from "react-router-dom";
import { CardListComponent } from "../components/course/card-list/card-list";

// export const LayoutMain = () => {
//     return (
//         <div className="flex h-screen bg-amber-200 text-black">
//             <header>
//                 <CardListComponent />
//                 <main>
//                     <Outlet />
//                 </main>
//             </header>
//         </div>
//     );
// };

export const LayoutMain = () => {
    return (
        <div className="flex h-screen bg-amber-200 text-black">
            <aside className="w-64 bg-white shadow ">
                <CardListComponent />
            </aside>

            <main className="flex-1  overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};
