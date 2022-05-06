import {useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem";



const TodoList=()=>{


    const dispatch=useDispatch();


    const todos=useSelector((state => state.todos));

    return(

        <ul className='list-group'>

            {todos.map((todo)=>(
                <TodoItem
                    key={todo.id} todo={todo}/>
            ))}

        </ul>
    )
}

export default TodoList;