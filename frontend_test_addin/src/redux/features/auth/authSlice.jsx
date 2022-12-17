import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
}

export const authSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        registeredUser: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { registeredUser } = authSlice.actions