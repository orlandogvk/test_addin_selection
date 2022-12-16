import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.users = action.payload.users
        },
        addUser: (state, action) => {
            state.users = action.payload.users
        },
        updateUser: (state, action) => {
            state.users = action.payload.users
        },
        deleteUser: (state, action) => {
            state.users = action.payload.users
        }
    }
})

export const { getUser, addUser, updateUser, deleteUser } = userSlice.actions