"use client"
import { usetodos } from '@/store/store'
import React from 'react'


const Tasks = () => {
    const { todos } = usetodos();
    console.log(todos);


    return (
        <ul>
            {
                todos.map((curElem) => { return (<li>{curElem.task}</li>) })
            }
        </ul>
    )
}

export default Tasks