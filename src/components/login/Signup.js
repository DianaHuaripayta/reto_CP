import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/authContext";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export default function Signup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
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
                Restrate
          </Typography>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
        <Box sx={{width: 500, margin:'10px 0px'}}>
          <TextField fullWidth label="Email" id="Email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}/>
        </Box>
        <Box sx={{width: 500, margin:'10px 0px'}}>
          <TextField fullWidth label="Password" id="password" placeholder='Email Password' type="password" onChange={(e) => setPassword(e.target.value)}/>
        </Box>
        <Box sx={{width: 500, margin:'10px 0px',  display: 'flex', justifyContent: 'center'}}>
          <Button variant="contained" type="Submit">
            Resgistrate
          </Button>
        </Box>
        </form>
        <div >
        Already have an account? <Link to="/logIn">Log In</Link>
      </div>
      </Box>
    </>
  )
}
