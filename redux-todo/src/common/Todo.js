/* 액선 정의 */
export const TODO_INSERT = "TODO/INSERT";
export const TODO_REMOVE = "TODO/REMOVE";
export const TODO_UPDATE = "TODO/UPDATE";
export const TODO_TOGGLE = "TODO/TOGGLE";


/* 액션 생성 함수 */
export const todoInsert = (id, text) => {


    return {
        type: TODO_INSERT,
        payload: {
            id: id,
            text: text,
            isCompleted: false,
        },
    };

};
export const todoRemove = (id) => {
    return {
        type: TODO_REMOVE,
        payload: { id: id },
    };
};
export const todoUpdate = (id, text) => {
    return {
        type: TODO_UPDATE,
        payload: { id: id, text: text },
    };
};
export const todoToggle = (id) => {
    return {
        type: TODO_TOGGLE,
        payload: { id: id },
    };
};

export const initState = {
    todos: [
        {
            id: 1,
            text: "TODOLIST 만들기",
            isCompleted: false,
        },
    ],
};

