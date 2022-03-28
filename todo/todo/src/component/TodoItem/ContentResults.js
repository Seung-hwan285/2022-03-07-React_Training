import React, {useState} from "react";
import CreateItem from "./CourseGoalItem";



// 삭제 수정 버튼도 만들기
// [] 삭제 버튼
// 삭제 구현 현재 id랑 클릭한 id가 같으면 삭제해버리기
// [] 수정 버튼


// 입력한 값은 잘 들어감
const TodoResults=(props)=>{


    const handlerdisplayNone=()=>{
        if(props.items.length ===0){
            const $list = document.querySelector('.ui-container');

            console.log($list);

            $list.style.display='none';
        }
    }

    handlerdisplayNone();
    return(
            <ul className="ui-container">
                {props.items.map(($el)=>(

                    <li key={$el.id}>
                        <CreateItem
                            id={$el.id}
                            item={$el.item}
                            onDeleteItemId = {props.onDeleteItemId}
                        />
                    </li>
                ))}
            </ul>
    );
}

export default TodoResults;
