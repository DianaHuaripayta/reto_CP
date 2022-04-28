import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import Premieres from './Premieres';
export default function Home() { 
  const [premieres, setPremieres] = useState([]);
  const getPremieres = async () =>{
    const querySnapshot = await getDocs(collection(db, "premieres"));
    const arrayProduct = [];
    querySnapshot.forEach((doc) => {
     
      arrayProduct.push({
        id: doc.id,
        description: doc.data().description,
        image :doc.data().image,
      })
      // console.log(doc.id,'--',doc.data().description, '--',doc.data().image)
     
    });
    setPremieres(arrayProduct)
  }

  useEffect(() => {
    getPremieres()
  }, [])

  return (
    <>
  <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ margin: '30px 50px', fontWeight:'bolder', display: { xs: 'none', md: 'flex' } }}
          >
            Premieres
    </Typography>
                
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '80%' ,margin:'auto'}}>
      {
        premieres.map((film) => (
          <div key={film.id}>
            <Premieres film={film}/>
          </div>
        ))
      }
    </Box>
  </>
  )
}