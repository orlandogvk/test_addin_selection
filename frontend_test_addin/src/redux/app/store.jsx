import { configureStore } from '@reduxjs/toolkit'
import { userSlice, productSlice} from '../features/index.jsx'

export const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        products: productSlice.reducer
    },
})