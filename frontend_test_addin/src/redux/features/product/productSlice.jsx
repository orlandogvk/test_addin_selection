import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProduct: (state, action) => {
            state.products = action.payload.products
        },
        addProduct: (state, action) => {
            // state.products = action.payload.products
        },
        updateProduct: (state, action) => {
            // state.products = action.payload.products
        },
        deleteProduct: (state, action) => {}
    }
})

export const { getProduct, addProduct, updateProduct, deleteProduct } = productSlice.actions