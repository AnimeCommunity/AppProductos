'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/productsSlice'
import { TextField, Button, Stack, MenuItem } from '@mui/material'

const categories = ['Bebidas', 'Papelería', 'Hogar', 'Otros']

export default function ProductForm() {
  const dispatch = useDispatch()
  const [form, setForm] = useState({ name: '', description: '', price: '', category: '' })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.name || !form.price || !form.category) return
    dispatch(addProduct({
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
      category: form.category
    }))
    setForm({ name: '', description: '', price: '', category: '' })
  }

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <TextField name="name" label="Nombre" value={form.name} onChange={onChange} fullWidth />
        <TextField name="description" label="Descripción" value={form.description} onChange={onChange} fullWidth multiline rows={2} />
        <TextField name="price" label="Precio" value={form.price} onChange={onChange} type="number" fullWidth />
        <TextField select name="category" label="Categoría" value={form.category} onChange={onChange} helperText="Selecciona una categoría">
          {categories.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
        </TextField>
        <Button type="submit" variant="contained">Agregar</Button>
      </Stack>
    </form>
  )
}
