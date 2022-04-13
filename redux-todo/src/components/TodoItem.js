import {useDispatch} from "react-redux";
import {ContainerItem, DeleteBtn, Text, TextColumn} from "../styled/Template";

const TodoItem=({todo})=>{
    console.log(todo);
    const dispatch =useDispatch();


    // 비구조화로 값 삽입
    const {id,title,isComplete}= todo;



    const handlerClick=(e)=>{
        console.log(e.target);
    }
    return(
        <ContainerItem>
            <TextColumn>
                <div>
                <Text>
                    {title}
                </Text>

                </div>
                <DeleteBtn onClick={handlerClick} >
                    {'X'}
                </DeleteBtn>
            </TextColumn>

        </ContainerItem>
    )
}

export default TodoItem;