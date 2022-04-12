import {useSelector} from "react-redux";
import {ContainerList} from "../styled/Template";
import TodoItem from "./TodoItem";

const TodoList=()=>{

    
    const todos= useSelector((state => state.todos));

    return(
        <ContainerList>
            {todos.map((todo) => (
                <TodoItem  todo={todo} />
            ))}
        </ContainerList>
    );
}

export default TodoList;

