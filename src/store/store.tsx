"use client"
import { ReactNode, createContext, useContext, useState } from "react";

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type TodoConext = {
    todos: Todo[];
    handleAddToDo: (task: string) => void;// call signature
}


export const todosContext = createContext<TodoConext | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {

    const [todos, Settodos] = useState<Todo[]>([])

    const handleAddToDo = (task: string) => {

        Settodos((prev) => {

            const newTodo: Todo[] = [{
                id: Math.random().toString(),
                task: task,
                completed: false,
                createdAt: new Date(),
            }, ...prev];
            return newTodo;
        });

    }

    return (
        <todosContext.Provider value={{ todos, handleAddToDo }}>
            {children}
        </todosContext.Provider>
    )

}


export function usetodos() {

    const todosContextValue = useContext(todosContext);

    if (!todosContextValue) {
        throw new Error("outside the provider")
    }
    return todosContextValue;
}