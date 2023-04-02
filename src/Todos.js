import React,{useState,useEffect} from "react";

function Todos () {
    const [todos,setTodos] =useState([])

const loadTodo=()=>{

    fetch(`https://jsonplaceholder.typicode.com/todos`)
     .then(response=>response.json())
       .then(data => setTodos(data))
      
       console.log(todos)
   }

   
   useEffect(()=> {
       loadTodo();
   },)
   return(
    <div>
        <h1>Todos</h1>
        {
            todos.map((usertodo)=>
            <div>
                <p>
                "userId":{usertodo.userId}<br/>
                "id": {usertodo.id}<br/>
                "title":{usertodo.title}<br/>
                "completed":{usertodo.completed}

                </p>
                
             </div>

            )
        }

    </div>
   )
   }

   export default Todos;