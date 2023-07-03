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
    handleToDoCompleted: (task: string) => void;// call signature
    handleToDoDelete: (task: string) => void;// call signature
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


    const handleToDoCompleted = (id: string) => {

        Settodos((prev) => {
            let newtodos = prev.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed }
                }
                return task;
            })
            return newtodos;
        });

        //    let newTodos = todos.map((task) => {
        //         if (task.id === id) {
        //             return { ...task, completed: !task.completed }
        //         }
        //         return task;
        //     })
        //     Settodos(newTodos);
    }

    const handleToDoDelete = (id: string) => {
        Settodos((prev) => {
            let newTodos = prev.filter(task => task.id !== id)
            return newTodos;
        })
    }

    return (
        <todosContext.Provider value={{ todos, handleAddToDo, handleToDoCompleted, handleToDoDelete }}>
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