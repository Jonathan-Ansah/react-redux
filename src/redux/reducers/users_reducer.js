import {createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        user:[]
    },
    reducers: {
        createUser:() => {

        },
        editUser:() => {

        },
        deleteUser:()=> {

        },
    }
})

export const { createUser, editUser, deleteUser} = usersSlice.actions;

export default usersSlice.reducer;  