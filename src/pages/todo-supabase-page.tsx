// ## USING ALL IN THE FILE -----------------------------

// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useTodoStore } from "../store/todo-store";
// import type { TodoInterface } from "../interfaces/todo.interface";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import { useForm } from "react-hook-form";

// import { Toaster, toast } from "sonner";

// const TodoSupabasePage = () => {
//     const { list, save } = useTodoStore();
//     const queryClient = useQueryClient();

//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm<TodoInterface>();

//     const { data, isLoading, error } = useQuery({
//         queryKey: ["todo-list"],
//         queryFn: list,
//     });

//     const { mutate, isPending } = useMutation({
//         mutationKey: ["todo-save"],
//         mutationFn: async (data: TodoInterface) => {
//             await save(data);
//         },
//         onError: (error) => {
//             toast.error("Error: " + error.message);
//         },
//         onSuccess: () => {
//             toast.success("Successfull");
//             reset();
//             queryClient.invalidateQueries({ queryKey: ["todo-list"] });
//         },
//     });

//     if (isLoading) return <span>LOADING...</span>;

//     if (error) return <span>Error... {error.message}</span>;

//     return (
//         <main className="min-h-screen bg-amber-400 flex items-center justify-center p-4">
//             <Toaster position="top-right" richColors />
//             <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
//                 <h1 className="text-2xl font-bold text-center text-black mb-4">
//                     TODO - SUPABASE + REACT
//                 </h1>
//                 <form onSubmit={handleSubmit((data) => mutate(data))} className="flex gap-2 mb-4">
//                     <input
//                         {...register("name", { required: "Todo is mandatory" })}
//                         type="text"
//                         placeholder="Enter todo"
//                         className="flex-1 border p-2  rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-amber-400"
//                     />
//                     {errors.name && (
//                         <p className="text-red-500 text-sm mb-2">{errors.name?.message}</p>
//                     )}
//                     <button
//                         type="submit"
//                         disabled={isPending}
//                         className="bg-amber-400 text-black font-bold px-4 rounded hover:bg-amber-300 cursor-pointer"
//                     >
//                         {isPending ? "Saving..." : "Add"}
//                     </button>
//                 </form>
//                 <ul className="flex flex-col">
//                     {data?.map((item: TodoInterface, i: number) => (
//                         <li
//                             className="flex justify-betwen items-center p-3 bg-amber-100 rounded shadow-sm "
//                             key={i}
//                         >
//                             <span
//                                 className={`cursor-pointer flex-1 ${
//                                     item.state ? "line-through text-gray-400" : ""
//                                 }`}
//                             >
//                                 {item.name}
//                             </span>
//                             <Icon
//                                 icon="fluent-emoji:skull"
//                                 width="32"
//                                 height="32"
//                                 className="cursor-pointer"
//                             />
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </main>
//     );
// };

// export default TodoSupabasePage;

// ## END USING ALL IN THE FILE -----------------------------

// import type { TodoInterface } from "../interfaces/todo.interface";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import { useForm } from "react-hook-form";

// import { Toaster } from "sonner";
// import {
//     useTodoDeleteMutation,
//     useTodoListQuery,
//     useTodoSaveMutation,
//     useTodoUpdateMutation,
// } from "../hooks/tanstack/todo-tanstack-hook";
// import { useTodoStore } from "../store/todo-store";
// import { ModalComponent } from "../components/modal-component";

// export const TodoSupabasePage = () => {
//     const { setItemSelect, showModal } = useTodoStore();

//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm<TodoInterface>();

//     const { data, isLoading, error } = useTodoListQuery();
//     const { mutate, isPending } = useTodoSaveMutation({ reset });
//     const { mutate: mutateRemove } = useTodoDeleteMutation();
//     const { mutate: matateUpdate } = useTodoUpdateMutation();

//     if (isLoading) return <span>LOADING...</span>;

//     if (error) return <span>Error... {error.message}</span>;

//     return (
//         <main className="min-h-screen bg-amber-400 flex items-center justify-center p-4">
//             <Toaster position="top-right" richColors />
//             {showModal && <ModalComponent />}
//             <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
//                 <h1 className="text-2xl font-bold text-center text-black mb-4">
//                     TODO - SUPABASE + REACT
//                 </h1>
//                 <form onSubmit={handleSubmit((data) => mutate(data))} className="flex gap-2 mb-4">
//                     <input
//                         {...register("name", { required: "Todo is mandatory" })}
//                         type="text"
//                         placeholder="Enter todo"
//                         className="flex-1 border p-2  rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-amber-400"
//                     />
//                     {errors.name && (
//                         <p className="text-red-500 text-sm mb-2">{errors.name?.message}</p>
//                     )}
//                     <button
//                         type="submit"
//                         disabled={isPending}
//                         className="bg-amber-400 text-black font-bold px-4 rounded hover:bg-amber-300 cursor-pointer"
//                     >
//                         {isPending ? "Saving..." : "Add"}
//                     </button>
//                 </form>
//                 <ul className="flex flex-col">
//                     {data?.map((item: TodoInterface, i: number) => (
//                         <li
//                             className="flex justify-betwen items-center p-3 bg-amber-100 rounded shadow-sm "
//                             key={i}
//                         >
//                             <span
//                                 onClick={() => {
//                                     setItemSelect(item);
//                                     matateUpdate();
//                                 }}
//                                 className={`cursor-pointer flex-1 ${
//                                     item.state ? "line-through text-gray-400" : ""
//                                 }`}
//                             >
//                                 {item.name}
//                             </span>
//                             <Icon
//                                 onClick={() => {
//                                     setItemSelect(item);
//                                     mutateRemove();
//                                 }}
//                                 icon="fluent-emoji:skull"
//                                 width="32"
//                                 height="32"
//                                 className="cursor-pointer"
//                             />
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </main>
//     );
// };

import type { TodoInterface } from "../interfaces/todo.interface";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";

import { Toaster } from "sonner";
import {
    useSearchTodoListQuery,
    useTodoDeleteMutation,
    useTodoListQuery,
    useTodoUpdateStateMutation,
} from "../hooks/tanstack/todo-hook";
import { useTodoStore } from "../store/todo-store";
import { ModalComponent } from "../components/modal-component";
import { ButtonBackComponent } from "../components/ui/buttons/button-back-component";
import { LoadingComponent } from "../components/loading/loading-component";

export const TodoSupabasePage = () => {
    const { setItemSelect, showModal, setShowModal, setSeacrch } = useTodoStore();

    const {
        formState: { errors },
    } = useForm<TodoInterface>();

    const { isLoading, error } = useTodoListQuery();
    const { data: dataSearch } = useSearchTodoListQuery();
    const { mutate: mutateRemove } = useTodoDeleteMutation();
    const { mutate: mutateUpdate } = useTodoUpdateStateMutation();

    if (isLoading) return LoadingComponent();

    if (error) return <span>Error... {error.message}</span>;

    return (
        <>
            <ButtonBackComponent />
            <main className="min-h-screen bg-amber-400 flex items-center justify-center p-4">
                <Toaster position="top-right" richColors />
                {showModal && <ModalComponent />}
                <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center text-black mb-4">
                        TODO - SUPABASE + REACT
                    </h1>
                    <section className="flex gap-2 mb-4">
                        <input
                            onChange={(e) => {
                                setSeacrch(e.target.value);
                            }}
                            type="text"
                            placeholder="Enter todo"
                            className="flex-1 border p-2  rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-amber-400"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mb-2">{errors.name?.message}</p>
                        )}
                        <button
                            onClick={() => {
                                setItemSelect(null);
                                setShowModal(true);
                            }}
                            type="button"
                            className="bg-amber-400 text-black font-bold px-4 rounded hover:bg-amber-300 cursor-pointer"
                        >
                            Add
                        </button>
                    </section>
                    <ul className="flex flex-col">
                        {dataSearch?.map((item: TodoInterface, i: number) => (
                            <li
                                className="flex justify-betwen items-center p-3 bg-amber-100 rounded shadow-sm "
                                key={i}
                            >
                                <span
                                    onClick={() => {
                                        setItemSelect(item);
                                        mutateUpdate();
                                    }}
                                    className={`cursor-pointer flex-1 ${
                                        item.state ? "line-through text-gray-400" : ""
                                    }`}
                                >
                                    {item.name}
                                </span>
                                <section className="flex gap-2 items-center">
                                    <Icon
                                        onClick={() => {
                                            setItemSelect(item);
                                            setShowModal(true);
                                        }}
                                        icon="fluent-color:edit-20"
                                        width="32"
                                        height="32"
                                        className="cursor-pointer"
                                    />
                                    <Icon
                                        onClick={() => {
                                            setItemSelect(item);
                                            mutateRemove();
                                        }}
                                        icon="fluent-emoji:skull"
                                        width="32"
                                        height="32"
                                        className="cursor-pointer"
                                    />
                                </section>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    );
};
