import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {ImageButton, ImageSrc, Image, ImageBackdrop, ImageMarked} from './premieresStyled'
import { Link } from "react-router-dom";
const Premieres = ({ film }) => {
    const { id, description,image } = film;
    
  return (
    <>
    <Box sx={{ margin:'10px'}}>
        <ImageButton
        component={Link}
        to="/signUp"
        focusRipple
        key={id}
        style={{
        width: 480,
        }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image})` }} />
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
              {description}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
   
    </Box> 
    </>
  )
}
export default Premieres