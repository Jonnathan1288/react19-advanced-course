import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTodoStore } from "../../store/todo-store";
import type { TodoInterface } from "../../interfaces/todo.interface";
import { toast } from "sonner";
import type { UseFormReset } from "react-hook-form";

export interface TodoSaveMutationInterface {
    reset: UseFormReset<TodoInterface>;
}

export const useTodoListQuery = () => {
    const { list } = useTodoStore();
    return useQuery({
        queryKey: ["todo-list"],
        queryFn: async () => await list(),
    });
};

export const useSearchTodoListQuery = () => {
    const { findList, searach } = useTodoStore();
    return useQuery({
        queryKey: ["todo-search", { value: searach }],
        queryFn: async () => await findList(searach),
    });
};

export const useTodoSaveMutation = ({ reset }: TodoSaveMutationInterface) => {
    const { save, setShowModal } = useTodoStore();
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["todo-save"],
        mutationFn: async (data: TodoInterface) => {
            await save(data);
        },
        onError: (error) => {
            toast.error("Error: " + error.message);
        },
        onSuccess: () => {
            toast.success("Successfull");
            reset();
            setShowModal(false);
            queryClient.invalidateQueries({ queryKey: ["todo-search"] });
        },
    });
};

export const useTodoDeleteMutation = () => {
    const { remove, itemSelect } = useTodoStore();
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["delete-todo"],
        mutationFn: async () => {
            await remove(itemSelect?.id ?? 0);
        },
        onError: (error) => {
            toast.error("Error: " + error.message);
        },
        onSuccess: () => {
            toast.success("Successfull");
            queryClient.invalidateQueries({ queryKey: ["todo-search"] });
        },
    });
};

export const useTodoUpdateMutation = () => {
    const { update, itemSelect, setShowModal } = useTodoStore();
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["todo-update"],
        mutationFn: async (data: TodoInterface) => {
            const updated: TodoInterface = {
                id: itemSelect?.id ?? 0,
                state: itemSelect?.state ?? false,
                name: data.name,
            };
            await update(updated);
        },
        onError: (error) => {
            toast.error("Error: " + error.message);
        },
        onSuccess: () => {
            toast.success("Successfull");
            setShowModal(false);
            queryClient.invalidateQueries({ queryKey: ["todo-search"] });
        },
    });
};

export const useTodoUpdateStateMutation = () => {
    const { update, itemSelect } = useTodoStore();
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["todo-update"],
        mutationFn: async () => {
            if (!itemSelect) {
                toast.error("No task selected to update");
                throw new Error();
            }
            const updated: TodoInterface = {
                ...itemSelect,
                state: !itemSelect.state,
            };
            await update(updated);
        },
        onError: (error) => {
            toast.error("Error: " + error.message);
        },
        onSuccess: () => {
            toast.success("Successfull");
            queryClient.invalidateQueries({ queryKey: ["todo-search"] });
        },
    });
};
