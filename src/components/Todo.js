import React from 'react';

class Todo extends React.Component {

    constructor(){
        super();
        this.state = {
            todo : []
        }
    }



    render(state, props) {
        console.log(this.props);
        return (
        <div>
            hoge
        </div>
        );
    }
}

export default Todo;