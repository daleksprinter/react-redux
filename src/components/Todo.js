import React from 'react';

class Todo extends React.Component {

    constructor(){
        super();
        this.state = {
            todo_txt : ""
        }
    }

    handleChange = (e) => {
        this.setState({
            todo_txt : e.target.value
        })
    }

    handleClick = () => {
        this.props.addTodo(this.state.todo_txt);
        this.setState({
            todo_txt : ""
        })
    }

    render(state, props) {
        return (
        <div>
            <textarea onChange = {this.handleChange} value = {this.state.todo_txt}></textarea>
            <button onClick = {this.handleClick}>ADD</button>
            <ul>
                {this.props.todo.todoList.map((todo, index) => {
                    return (
                        <li key = {index}>{todo}</li>
                    )
                })}
            </ul>
        </div>
        );
    }
}

export default Todo;