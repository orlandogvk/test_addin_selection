import { configureStore } from '@reduxjs/toolkit'
import { authSlice, productSlice} from '../features/index.jsx'

export const store = configureStore({
    reducer: {
        users: authSlice.reducer,
        products: productSlice.reducer
    },
})