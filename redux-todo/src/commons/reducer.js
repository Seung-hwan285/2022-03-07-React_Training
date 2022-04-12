import {ADD} from "./actions";

const init={
    todos: [],
};

//
export const reducer =(state=init , action)=>{
    // 실제 해당 액션이 어떤 결과를 내어야하는지 리듀서에서 정의의    if(action.type ===ADD){

    if(action.type===ADD){
        return{
                todos: [...state.todos , action.todo],
        };
    }

}