'use client'
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import { Product } from '../types/product'
import { deleteProduct } from '../store/productsSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import EditProductModal from './EditProductModal'

type Props = { product: Product }

export default function ProductCard({ product }: Props) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const handleDelete = () => {
        dispatch(deleteProduct(product.id))
    }

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        {product.description}
                    </Typography>
                    <Typography variant="subtitle1">${product.price.toFixed(2)}</Typography>
                    <Typography variant="caption">{product.category}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => setOpen(true)}>
                        Editar
                    </Button>
                    <Button size="small" color="error" onClick={handleDelete}>
                        Eliminar
                    </Button>
                </CardActions>
            </Card>

            {/* Modal de edición */}
            <EditProductModal
                open={open}
                onClose={() => setOpen(false)}
                product={product}
            />
        </>
    )
}
