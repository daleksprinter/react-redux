const initialState = {
    todoList : []
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case "add_todo":
            const todo = action.payload.todo;
            const newState = Object.assign({}, state);
            newState.todoList.push(todo);
            return newState;

        default :
            return state;
    }
}