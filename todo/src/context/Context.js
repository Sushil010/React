import React from "react";
import { createContext } from "react";
import { useContext } from "react";



//createContext can be used to include values and functions only but not functionality
export const TodoContext=createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed: false

        }
    ],
    addTodos : (todo)=>{},
    deletetodo: (id, todo)=>{},
    toggletodo: (id)=>{},
    updatetoddo: (id,todo)=>{}

})


export const useTodo=()=>{
    return useContext(TodoContext)
}

export const Todoprovider=TodoContext.Provider()



