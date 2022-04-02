import React, {useEffect, useState} from "react";
import CreateItem from "./CourseGoalItem";



// 삭제 수정 버튼도 만들기
// [x] 삭제 버튼
// 삭제 구현 현재 id랑 클릭한 id가 같으면 삭제해버리기

// [] 수정 버튼


// 입력한 값은 잘 들어감
const TodoResults=(props)=>{

    // 1. 삭제하고 ui-container 목록 사라지면 안보이게 ,
        // props.item이 길이가 0이면 상태에 none값을 준다.

    const [show, setShow]=useState('block');


    // 2. 추가하면 다시 나타나게 -> 상태로 관리하기

    const handlerDisplay =()=>{
            if(props.items.length ===0){

                setShow('none');
            }else{
                setShow('block');
            }

    }

    // 사용안하면 무한랜더링걸림

    useEffect(()=>{
         handlerDisplay();
    });

    return(
            <ul className="ui-container" style={{display: show}}  >
                {props.items.map(($el)=>(

                    <li key={$el.id}>
                        <CreateItem

                            id={$el.id}
                            item={$el.item}
                            bool={$el.bool}
                            checked={$el.checked}
                            onDeleteItemId = {props.onDeleteItemId}

                        />
                    </li>
                ))}
            </ul>
    );
}

export default TodoResults;
