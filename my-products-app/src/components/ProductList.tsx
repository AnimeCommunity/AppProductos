'use client'
import { useSelector } from 'react-redux'
import { Box, Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import ProductCard from './ProductCard'
import { RootState } from '../store'
import { Product } from '../types/product'

export default function ProductList() {
    const { items, filter } = useSelector((state: RootState) => state.products)

    const filtered: Product[] =
        filter === 'All' ? items : items.filter((p: Product) => p.category === filter)

    if (!filtered.length) return <Typography>No hay productos.</Typography>

    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={2}
        >
            {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Box>
    )

}
