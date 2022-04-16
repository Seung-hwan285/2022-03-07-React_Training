import {useDispatch} from "react-redux";
import {ContainerItem, DeleteBtn, Text, TextBox, TextColumn, TextInput, UpdateBtn} from "../styled/Template";
import {delete_todo, update_todo} from "../commons/actions";
import {useCallback, useState} from "react";

const TodoItem=({todo})=>{


    const dispatch =useDispatch();

    const [readOnly,setReadOnly]=useState(true);

    // 비구조화로 값 삽입
    const {id, title, isComplete} = todo;
    const [updateText,setUpdateText] = useState(title);

    const handlerDelteClick = () => {
        console.log(id);
        dispatch(delete_todo(id));
    }


    const handlerUpdateClick=()=> {

        if (!isComplete)
            setReadOnly(false);

        console.log(readOnly)
    }

    return (
        <ContainerItem>
            <TextColumn>

                    <TextBox
                        defaultValue={title}
                        cheked = {isComplete}
                    />

                <div>

                    <UpdateBtn onClick={handlerUpdateClick}>
                        {'✏'}
                    </UpdateBtn>

                    <DeleteBtn onClick={handlerDelteClick}>
                        {'X'}
                    </DeleteBtn>

                </div>
            </TextColumn>

        </ContainerItem>
    )
}

export default TodoItem;