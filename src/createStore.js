import {createStore as reduxCreateStore, combineReducers } from 'redux';
import {todoReducer} from './reducers/Todo';

function createStore(){
    const store = reduxCreateStore(
        combineReducers({
            todo:todoReducer,
        })
    )
    return store
}

export default  createStore;
