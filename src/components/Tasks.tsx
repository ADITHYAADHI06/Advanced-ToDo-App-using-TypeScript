"use client"
import { usetodos } from '@/store/store'
import { useSearchParams } from "next/navigation"


const Tasks = () => {
    const { todos, handleToDoCompleted, handleToDoDelete } = usetodos();

    const params = useSearchParams();
    const todoFilter = params.get("todos");

    let filtertodos = todos;

    if (todoFilter === "active") {
        filtertodos = todos.filter(task => !task.completed)
    } else if (todoFilter === "completed") {
        filtertodos = todos.filter(task => task.completed)
    }

    console.log(filtertodos);


    return (
        <ul>
            {
                filtertodos.map((task) => {
                    return (

                        <li key={task.id} >
                            <input type="checkbox" name="" id={`task${task.id}`} checked={task.completed} onChange={() => { handleToDoCompleted(task.id) }} />
                            <label htmlFor={`task${task.id}`} className={task.completed ? "cross" : ""}> {task.task}</label>
                            {
                                task.completed && (<button onClick={() => { handleToDoDelete(task.id) }} > Delete </button>)
                            }

                        </li>
                    )
                })
            }
        </ul >
    )
}

export default Tasks