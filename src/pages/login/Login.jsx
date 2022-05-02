import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/authContext.js";
import { useForm } from "react-hook-form";
import { errorsFirebase } from "../../utils/errorsFirebase";
import { FormValidate } from "../../utils/FormValidate.js";


import GoogleIcon from '@mui/icons-material/Google';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormError from '../../components/FormError'
import FormInput from "../../components/FormInput.jsx";
import ButtonComponent from "../../components/ButtonComponent.jsx";

const Login = () => {
    const [modal, setModal] = useState(false);
    const { logIn, googleSignIn } = useUserAuth();
    
    const navigate = useNavigate();
    const {required, patternEmail, minLength, validateTrim} = FormValidate()
    const { 
      register, 
      handleSubmit, 
      setError,
      formState: { errors } } = useForm();
    
      const onSubmit = async ({ email, password }) => { //react hook form get data firebase
        console.log(email, password);
        try {
            await logIn(email, password);
            console.log("Usuario creado");
            navigate("/dulceria");
        } catch (error) {
          const { code, message } = errorsFirebase(error);
          setError(code, { message });
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
          <FormError error={errors.firebase}/>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{width: 500, margin:'10px 0px'}}>
          <FormInput 
            fullWidth   
            label="Email" 
            id="Email" 
            placeholder='paola@gmail.com' 
            {...register("email", {
              required,
              pattern: patternEmail,
          })}
          />

           <FormError error={errors.email}/> 
          </Box>
          <Box sx={{width: 500, margin:'10px 0px'}}>
          <FormInput 
            fullWidth 
            label="Contraseña" 
            id="password" 

            placeholder='contraseña' 
            type="password" 
            {...register('password',{
              minLength,
              validate: validateTrim,
            })}/>
            <FormError error={errors.password}/>
          </Box> 
          {/* <Button variant="contained" type="Submit">
                Iniciar sesion 
          </Button> */}
          <ButtonComponent variant="contained" type="Submit">
            Iniciar sesion 
          </ButtonComponent>
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

