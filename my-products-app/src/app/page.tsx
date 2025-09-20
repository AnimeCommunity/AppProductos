'use client'
import { Container, Typography, Box, Paper } from '@mui/material'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
import CategoryFilter from '../components/CategoryFilter'

export default function Page() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Gestión de Productos
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr', md: '1fr 2fr' }} // 1 columna en mobile, 2 en desktop
        gap={3}
      >
        {/* Columna izquierda */}
        <Box>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Agregar producto</Typography>
            <ProductForm />
          </Paper>
          <Box mt={2}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Filtrar</Typography>
              <CategoryFilter />
            </Paper>
          </Box>
        </Box>

        {/* Columna derecha */}
        <Box>
          <ProductList />
        </Box>
      </Box>
    </Container>
  )
}
