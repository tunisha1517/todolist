import React, { useEffect, useState } from "react";
import Form from "./form";

const TodoList =()=>{
    const initialState=JSON.parse(localStorage.getItem("todos"))||[];
    const [input,setInput]=useState("");
    const [todos,setTodos]=useState(initialState);
    const [editTodo,setEditTodo]=useState(null); 
    useEffect(()=>{  
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos]);
    const HandleDelete=({id})=>{
        setTodos(todos.filter((todo)=>
            todo.id !== id
        ))
    }
    const HandleComplete = (todo) =>{
        
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id ){
                return{...item,completed : !item.completed };
                }
                return item;

            })
            
        )
        console.log(todos);
    }
    const HandleEdit=({id})=>{
const findTodo=todos.find((todo=>todo.id === id))
  setEditTodo(findTodo)

    }
    return(
        <div>
            <div>
        <Form 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
      </div>
          {todos.map((todo)=>(
            <li className="list-item" key={todo.id}><div className={`list ${todo.completed ? "complete": ""}`}>{todo?.title}</div>
            <div>
                <button className="button-complete task-button"  onClick={()=>HandleComplete(todo)}>
                    <i className="fa fa-check-circle"></i>
                </button>
                <button className="button-edit task-button" onClick={()=>HandleEdit(todo)}>
                    <i className="fa fa-edit"></i>
                </button>
                <button className="button-delete task-button" onClick={()=>HandleDelete(todo)}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
            </li>
          ))}
        </div>
    )
}
export default TodoList;