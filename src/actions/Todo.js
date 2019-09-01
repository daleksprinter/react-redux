export const addTodo = (todo) => {
    return {
        type : 'add_todo',
        payload : {
            todo : todo
        }
    };
}

