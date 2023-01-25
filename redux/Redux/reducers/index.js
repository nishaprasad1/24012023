import { loginReducer } from "./loginReducer";
import { productReducer } from "./productReducer";
import {combineReducers} from 'redux';

const reducers= combineReducers({
    loginStatus:loginReducer,
    allProducts:productReducer
})

export default reducers;

