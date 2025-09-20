import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types/product'
import initialData from '../data/products.json'

interface ProductsState {
  items: Product[]
  filter: string
}

const initialState: ProductsState = {
  items: initialData,
  filter: 'All'
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<Product, 'id'>>) => {
      const nextId = state.items.length ? Math.max(...state.items.map(p => p.id)) + 1 : 1
      state.items.push({ id: nextId, ...action.payload })
    },
    editProduct: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(p => p.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(p => p.id !== action.payload)
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    }
  }
})

export const { addProduct, setFilter, editProduct, deleteProduct } = productsSlice.actions
export default productsSlice.reducer
