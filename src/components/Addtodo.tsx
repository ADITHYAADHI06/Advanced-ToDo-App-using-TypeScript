"use client"

import { usetodos } from "@/store/store";
import { FormEvent, useState } from "react";


const Addtodo = () => {

    const { handleAddToDo } = usetodos();
    const [toDO, setTodO] = useState("");



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(toDO);
        // it makes todo null
        setTodO("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={toDO} onChange={(e) => { setTodO(e.target.value) }} />
            <button type="submit">ADD</button>
        </form>
    )
}

export default Addtodo;