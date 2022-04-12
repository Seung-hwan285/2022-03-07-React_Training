import {useDispatch} from "react-redux";
import {ContainerItem, Text, TextColumn} from "../styled/Template";

const TodoItem=({todo})=>{
    console.log(todo);
    const dispatch =useDispatch();


    // 비구조화로 값 삽입
    const {id,title,isComplete}= todo;


    return(
        <ContainerItem>
            <TextColumn>

                <div>
                <Text>
                    {title}
                </Text>
                </div>
            </TextColumn>

        </ContainerItem>
    )
}

export default TodoItem;