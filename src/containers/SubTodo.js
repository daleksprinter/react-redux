import { connect } from 'react-redux';
import * as actions from '../actions/Todo';
import SubTodo from '../components/SubTodo';

const mapStateToProps = (state) => {
    return {
        todo: state.todo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (todo) => dispatch(actions.addTodo(todo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubTodo);

