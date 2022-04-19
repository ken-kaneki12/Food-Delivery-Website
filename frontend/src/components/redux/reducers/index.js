import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import shopcart from './shoppingCartReducer'
// import users from './usersReducer'

export default combineReducers({
    auth,
    token,
    shopcart
    // users
})