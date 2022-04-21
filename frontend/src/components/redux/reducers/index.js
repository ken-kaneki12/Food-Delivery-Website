import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import cart from './shoppingCartReducer'
// import users from './usersReducer'

export default combineReducers({
    auth,
    token,
    cart
    // users
});

