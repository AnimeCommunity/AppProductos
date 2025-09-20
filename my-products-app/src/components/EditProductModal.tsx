'use client'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editProduct } from '../store/productsSlice'
import { Product } from '../types/product'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Stack
} from '@mui/material'

const categories = ['Bebidas', 'Papelería', 'Hogar', 'Otros']

type Props = {
  open: boolean
  onClose: () => void
  product: Product | null
}

export default function EditProductModal({ open, onClose, product }: Props) {
  const dispatch = useDispatch()
  const [form, setForm] = useState<Product | null>(product)

  useEffect(() => {
    setForm(product)
  }, [product])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!form) return
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    if (form) {
      dispatch(
        editProduct({
          ...form,
          price: Number(form.price)
        })
      )
      onClose()
    }
  }

  if (!form) return null

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editar producto</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            name="name"
            label="Nombre"
            value={form.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="description"
            label="Descripción"
            value={form.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={2}
          />
          <TextField
            name="price"
            label="Precio"
            type="number"
            value={form.price}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            select
            name="category"
            label="Categoría"
            value={form.category}
            onChange={handleChange}
            fullWidth
          >
            {categories.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave} variant="contained">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
