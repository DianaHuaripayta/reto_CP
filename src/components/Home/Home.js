import React, {useState, useEffect} from 'react'
import axios from "axios";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {ImageButton, ImageSrc, Image, ImageBackdrop, ImageMarked} from './homeStyled'
import { Link } from "react-router-dom";
export default function Home() {
  const [premieres, setPremieres] = useState([]);

  useEffect(() => {
    axios.get('http://ec2-3-138-85-219.us-east-2.compute.amazonaws.com:8080/cp/v1/premieres')
    .then((response) => {
      setPremieres(response.data.premieres)
      console.log(response.data.premieres)

    });
  }, []);
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
   <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '95%' , margin: 'auto'}}>
    {premieres.map((item, index) => 
      <ImageButton
        focusRipple
        component={Link}
        to="/signUp"
        key={index}
        style={{  
          width: '30%',
          margin: 20,
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${item.image})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: 'relative',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {item.description}
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>
    )}
  </Box>
  </>
  )
}
