import { api } from '../../../services/api.services'
import { registeredUser } from './authSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const signIn = (user) => {
    return async (dispatch) => {
        const { email, password } = user
        const { data } = await api.post('/users/login/', { email, password })
        dispatch(registeredUser(data))
    }
}

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (user, { rejectWithValue }) => {
        try {
            const { name, email, password } = user
            await api.post('/auth/register', { name, email, password })
            return 'Se creo el usuario con éxito'
        } catch (err) {
            return rejectWithValue('El usuario no pude ser creado')
        }
    }
)
