import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

export default function TablePedido({card, setCard}) {
    const total = card.reduce((acc, item) => acc + item.quantity * item.price , 0)//item el elemento actual | 0 

    const fnResta = (id) => {
        // eslint-disable-next-line array-callback-return
        card.map((product) => {
            if (product.id === id && product.quantity > 1) {
                
                setCard(
                    card.map((products) =>
                      products.id === product.id ? 
                      { ...products, 
                        quantity: products.quantity - 1 
                      } : products)
                );         
            }
           
        })
    }
    const fnSuma = (id) => {
        // eslint-disable-next-line array-callback-return
        card.map((product) => {
            if (product.id === id) {
                setCard(
                card.map((products) =>
                    products.id === product.id ? 
                    { ...products, 
                    quantity: products.quantity + 1 
                    } : products)
                );         
            }  
        })
    }
    const deleteAllProducts = (e) =>{
        e.preventDefault();
        setCard([])
    }
  return (
      <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Precio</TableCell>
            <TableCell align="center">Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {card.length === 0 ? (
                <TableRow>
                    <TableCell align="center">Agregar</TableCell>
                    <TableCell align="center">Agregar</TableCell>
                    <TableCell align="center">Agregar</TableCell>
                </TableRow>
              
          ) : (
            card.map((product) => (
              <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{product.description}</TableCell>
              <TableCell align="center">{product.price}</TableCell>
              <TableCell align="center">  
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly'}}>
                    <RemoveIcon 
                    sx={{ color: "#1976d2", fontSize: '20px', cursor: 'pointer'}} 
                    onClick={() => fnResta(product.id)} /> 
                    {product.quantity}

                    <AddIcon 
                    sx={{ color: "#1976d2", fontSize: '20px', cursor: 'pointer'}} 
                    onClick={() => fnSuma(product.id)} />

                    <DeleteIcon 
                    sx={{ color: "#000", fontSize: '20px', cursor: 'pointer' }} 
                    onClick={() => setCard(card.filter(item => item.id !== product.id))} />
                </Box>
            
              </TableCell>
            </TableRow>
            ))   
          )
        }
        <TableRow>
        <TableCell align="center"></TableCell>
        <TableCell align="center">
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly'}}>
                        <strong>{total}</strong> 
                        <DeleteIcon sx={{ color: "#000", fontSize: '20px', cursor: 'pointer' }}  
                        onClick={deleteAllProducts}/>
                </Box>
        </TableCell>
        </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
      </>
  )
}