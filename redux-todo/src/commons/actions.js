
export const ADD=  "ADD_TODO";
export const DELETE = "DELETE_TODO";
export const UPDATE ="UPDATE_TODO";

let id = 1;

export const add_todo =(todo)=>{

    return{
        type: ADD,
        todo :{
            id: id++,
            title : todo.title,
            isComplete : todo.isComplete,
        }
    };
};

export const delete_todo=(id)=>{
    return {
        type : DELETE,
        id,
    }
}

export const update_todo=(id,text)=>{

    return{
        type : UPDATE,
        payload : {id: id, text: text},
    };

}