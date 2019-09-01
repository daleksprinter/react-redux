const addTodo = (todo) => {
    return {
        type : 'add_todo',
        payload : {
            todo : todo
        }
    };
}

export default addTodo;