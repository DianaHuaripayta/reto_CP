import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
export default function Dulceria() {
    const [product, setProduct] = useState([]);
    const getPremieres = async () =>{
        const querySnapshot = await getDocs(collection(db, "products"));
        const arrayProduct = [];
        querySnapshot.forEach((doc) => {
         
          arrayProduct.push({
            id: doc.id,
            description: doc.data().description,
            name :doc.data().name,
            price :doc.data().price,
          })
          // console.log(doc.id,'--',doc.data().description, '--',doc.data().name)
         
        });
        setProduct(arrayProduct)
      }
    
      useEffect(() => {
        getPremieres()
      }, [])

  return (
    <>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '80%' ,margin:'auto'}}>
        {product.map((item) => (
        <Card sx={{ maxWidth: 345, margin:'14px' }} key={item.id}>
           <CardActionArea>
             <CardMedia
               component="img"
               height="140"
               image={item.name}
               alt="image"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
               {item.price}
               </Typography>
               <Typography variant="body2" color="text.secondary">
               {item.description}
               </Typography>
             </CardContent>
           </CardActionArea>
         </Card>
        ))
        }
    
    </Box>
    
    </>
  )
}
