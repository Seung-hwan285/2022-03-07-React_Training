import {useDispatch} from "react-redux";
import {ContainerItem, DeleteBtn, Text, TextColumn} from "../styled/Template";
import {delete_todo} from "../commons/actions";

const TodoItem=({todo})=>{
    console.log(todo);
    const dispatch =useDispatch();


    // 비구조화로 값 삽입
    const {id,title,isComplete}= todo;



    const handlerDelteClick=()=>{
        console.log(id);

        dispatch(delete_todo(id));
    }
    return(
        <ContainerItem>
            <TextColumn>
                <div>
                <Text>
                    {title}
                </Text>

                </div>
                <DeleteBtn onClick={handlerDelteClick} >
                    {'X'}
                </DeleteBtn>
            </TextColumn>

        </ContainerItem>
    )
}

export default TodoItem;