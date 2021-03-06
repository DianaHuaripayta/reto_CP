import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";
import { useUserAuth } from "../../../context/authContext";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalBienvenida() {
  const { user } = useUserAuth();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Bienvenid@!!!
          </Typography>
          
          <Box sx={{ margin:'10', textAlign: 'center'}}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {user && user.displayName}
          </Typography>
          </Box> 
        <Button variant="contained" component={Link}  onClick={handleClose}
          to="/dulceria">
            Aceptar
          </Button>
        </Box>
      
      </Modal>
    </div>
  );
}
