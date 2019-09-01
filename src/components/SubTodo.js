import React from 'react';

class SubTodo extends React.Component {

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
        </div>
        );
    }
}

export default SubTodo;