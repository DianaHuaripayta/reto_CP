import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/authContext";
import { useForm } from "react-hook-form";
import { errorsFirebase } from "../../utils/errorsFirebase";
import { FormValidate } from "../../utils/FormValidate";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormError from '../../components/FormError'
import FormInput from '../../components/FormInput'

export default function Signup() {
  const {required, patternEmail, minLength, validateTrim, validateEquals} = FormValidate()
  
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    getValues,
    setError,
    formState: { errors } } = useForm();

const onSubmit = async ({ email, password }) => { //react hook form get data firebase
      console.log(email, password);
      try {
          await signUp(email, password);
          console.log("Usuario creado");
          navigate("/dulceria");
      } catch (error) {
        const { code, message } = errorsFirebase(error);
        setError(code, { message });
      }
  };

  return (
    <>
       <Box
          sx={{
            width: 500,
            height: 700,
            backgroundColor: '#f1f1f145',
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
                Registrate
          </Typography>
         
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormError error={errors.firebase}/>
        <Box sx={{width: 500, margin:'10px 0px'}}>
          <FormInput 
            fullWidth 
            label="Nombre"  
            placeholder='Paola Sonia' 
            {...register('name', { 
              required: {
                value: true,
                message: "Campo obligatorio",
              }
            })}
            />
             <FormError error={errors.name}/>
        </Box>
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
           {/* esta manera */}

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
          {/* esta manera */}
        </Box>
        <Box sx={{width: 500, margin:'10px 0px'}}>
          <FormInput 
          fullWidth 
          label="Confirmar Contraseña" 
          placeholder='contraseña' 
          type="password" 
          {...register('repassword',{
            validate: validateEquals(getValues('password')),
          })}/>
           <FormError error={errors.repassword}/>
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