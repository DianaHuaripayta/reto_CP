import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/authContext.js";
import GoogleIcon from '@mui/icons-material/Google';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [modal, setModal] = useState(false);
    const { logIn, googleSignIn } = useUserAuth();
    
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await logIn(email, password);
        navigate("/modal");
      } catch (err) {
        setError(err.message);
      }
    };
  
    const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate("/modal");
        //modal
        setModal(!modal)
      } catch (error) {
        console.log(error.message);
      }
    };
  
    return (
      <>
        <Box
          sx={{
            width: 500,
            height: 400,
            backgroundColor: '#f1f1f1',
            margin: '39px auto',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding:'0px 30px'
          }}
        >
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2 , fontWeight:'bolder',display: { xs: 'none', md: 'flex' } }}
          >
                Iniciar Sesion
          </Typography>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
          <Box sx={{width: 500, margin:'10px 0px'}}>
            <TextField fullWidth label="Email" id="Email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}/>  
          </Box>
          <Box sx={{width: 500, margin:'10px 0px'}}>
            <TextField fullWidth label="Password" id="password" placeholder='Email Password' type="password"
            onChange={(e) => setPassword(e.target.value)}
            />
          </Box> 
          <Button variant="contained" type="Submit">
                Iniciar sesion 
          </Button>
          </form>
         
          <hr />
          <div>
          <Button variant="contained" endIcon={<GoogleIcon />} onClick={handleGoogleSignIn}>
                Sign In with
              </Button>
          </div>

          <div className="p-4 box mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
        </Box>
      </>
    );
  };
  export default Login;

