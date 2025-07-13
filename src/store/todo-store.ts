import { create } from "zustand"
import { supabse } from '../supabase/supabase.config'
import type { TodoInterface } from "../interfaces/todo.interface";

interface TodoStoreInterface {
    showModal: boolean,
    setShowModal: (show: boolean) => void,
    itemSelect: TodoInterface | null,
    searach: string,
    setSeacrch: (p: string) => void
    setItemSelect: (ti: TodoInterface | null) => void,
    findList: (p: string) => Promise<TodoInterface[]>,
    list: () => Promise<TodoInterface[]>,
    save: (ti: TodoInterface) => Promise<void>,
    update: (ti: TodoInterface) => Promise<void>,
    remove: (id: number) => Promise<void>
}

const table = 'todo'

export const useTodoStore = create<TodoStoreInterface>((set) => ({
    showModal: false,
    setShowModal: (p) => set({ showModal: p }),
    searach: '',
    setSeacrch: (p) => set({ searach: p }),
    itemSelect: null,
    setItemSelect: (p) => set({ itemSelect: p }),
    list: async () => {
        const { data, error } = await supabse.from(table).select();
        if (error) throw new Error(error.message);
        return data ?? [];
    },
    findList: async (p) => {
        const { data, error } = await supabse.from(table).select().ilike('name', '%' + p + '%').order('name', { ascending: true });
        if (error) throw new Error(error.message);
        return data ?? [];
    },
    save: async (p) => {
        const { error } = await supabse.from(table).insert(p);
        if (error) throw new Error(error.message);
    },
    update: async (p) => {
        const { error } = await supabse.from(table).update(p).eq('id', p.id);
        if (error) throw new Error(error.message);
    },
    remove: async (id) => {
        const { error } = await supabse.from(table).delete().eq('id', id);
        if (error) throw new Error(error.message);
    }
}));