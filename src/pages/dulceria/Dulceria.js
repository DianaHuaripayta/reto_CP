import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import Product from './Product';
import TablePedido from './Table';
export default function Dulceria() {
    const [product, setProduct] = useState([]);
    // const [contentDulces, setContentDulces] = useState([]); 
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
        // async function fetchList() {
        //   const getListDulce = await getDulceFirestore()
        //   setContentDulces(getListDulce.filter(doc => doc.id === id));
        // }
        // fetchList()
        getDulceFirestore()
      }, [])
      

      const [card, setCard] = useState([])

    //   const addOrdersFirebase =async(e)=>{
    //     e.preventDefault()
    //     let order = {};
    //     order.products = card;
    //     order.created_at = new Date();
    //     order.status = "pending";

    //     console.log(order); 

    //     const docRef = await addDoc(collection(db, "orders"), {
    //     products: card,
    //     created : new Date(),
    //     status : "pending"
        
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    // }

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
