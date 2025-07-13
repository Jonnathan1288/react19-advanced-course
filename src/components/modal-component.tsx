import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import type { TodoInterface } from "../interfaces/todo.interface";
import { useTodoSaveMutation, useTodoUpdateMutation } from "../hooks/tanstack/todo-hook";
import { useTodoStore } from "../store/todo-store";

export const ModalComponent = () => {
    const { setShowModal, itemSelect, setItemSelect } = useTodoStore();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TodoInterface>({
        defaultValues: {
            name: itemSelect?.name,
        },
    });

    const { mutate, isPending } = useTodoSaveMutation({ reset });
    const { mutate: mutateUpdate } = useTodoUpdateMutation();
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-md">
                <section className="flex justify-between mb-4">
                    <span className="font-bold text-2xl">NEW TASK</span>
                    <Icon
                        onClick={() => {
                            reset();
                            setItemSelect(null);
                            setShowModal(false);
                        }}
                        className="cursor-pointer"
                        icon="mingcute:close-fill"
                        width="24"
                        height="24"
                    />
                </section>
                <form
                    onSubmit={handleSubmit((data) =>
                        itemSelect ? mutateUpdate(data) : mutate(data)
                    )}
                    className="flex flex-col gap-4"
                >
                    <input
                        {...register("name", { required: "Todo is mandatory" })}
                        type="text"
                        placeholder="Enter todo"
                        className="flex-1 border p-2  rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-amber-400"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mb-2">{errors.name?.message}</p>
                    )}
                    <div className="mx-auto">
                        <button
                            type="submit"
                            disabled={isPending}
                            className="bg-amber-400 text-black font-bold px-4 rounded hover:bg-amber-300 cursor-pointer py-2"
                        >
                            {isPending ? "Saving..." : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
