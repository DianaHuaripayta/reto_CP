import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ButtonComponent from '../../components/ButtonComponent'

export default function Product({product,card, setCard}) {
    const { id, name, price, description } = product; 

    const addInList = () =>{
        const existProduct = card.find((products) => products.id === product.id)
        if (existProduct) {
            setCard(//contiene todos los agregados
              card.map((products) =>
                products.id === product.id ? 
                { ...existProduct, 
                  quantity: existProduct.quantity + 1 
                } : products)
                );   
                
          } else {
            setCard([...card, { ...product, quantity: 1 }]);                  
        }
      }
  return (
    <Card sx={{ maxWidth: 345, margin:'14px' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={name}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <ButtonComponent onClick={() => addInList(id)}>Agregar</ButtonComponent>
  </Card>
  )
}
