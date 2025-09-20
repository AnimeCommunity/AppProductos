'use client'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../store/productsSlice'
import { RootState } from '../store'
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'

export default function CategoryFilter() {
  const dispatch = useDispatch()
  const { items, filter } = useSelector((state: RootState) => state.products)

  const categories = Array.from(new Set(items.map(i => i.category))).sort()

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(setFilter(e.target.value || 'All'))
  }

  return (
    <FormControl fullWidth>
      <InputLabel>Categoría</InputLabel>
      <Select value={filter} label="Categoría" onChange={handleChange}>
        <MenuItem value={'All'}>Todas</MenuItem>
        {categories.map(c => (
          <MenuItem key={c} value={c}>
            {c}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
