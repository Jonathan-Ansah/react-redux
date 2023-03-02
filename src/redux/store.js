import {configureStore} from '@reduxjs/toolkit'
import users_reducer from './reducers/users_reducer';
export default configureStore({
    reducer:{usersReducer : users_reducer}
})
