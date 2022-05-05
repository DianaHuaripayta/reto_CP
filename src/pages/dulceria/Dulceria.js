import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import Product from './Product';
import TablePedido from './Table';
export default function Dulceria() {
    const [product, setProduct] = useState([]);
    const getDulceFirestore = async () =>{
        const querySnapshot = await getDocs(collection(db, "products"));
        const arrayProduct = [];
        querySnapshot.forEach((doc) => {
          arrayProduct.push({
            id: doc.id,
            description: doc.data().description,
            name :doc.data().name,
            price :doc.data().price,
          })
        });
        setProduct(arrayProduct)
      }
    
      useEffect(() => {
        getDulceFirestore()
      }, [])

      const [card, setCard] = useState([])
  return (
    <>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '80%' ,margin:'auto'}}>
        {product.map((product) => (
        <Product
        key={product.id} 
        product={product} 
        card={card} 
        setCard={setCard} 
        />
        ))
        }
    </Box>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '80%' ,margin:'50px auto'}}>
        <TablePedido card={card} setCard={setCard}/>
    </Box>
    </>
  )
}
