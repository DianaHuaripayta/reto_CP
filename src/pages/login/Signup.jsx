import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/authContext";
import { useForm } from "react-hook-form";
import { errorsFirebase } from "../../utils/errorsFirebase";
import { FormValidate } from "../../utils/FormValidate";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormError from '../../components/FormError'
import FormInput from '../../components/FormInput'
import ButtonComponent from '../../components/ButtonComponent'

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
            height: 620,
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
            color='primary'
            sx={{ mr: 2 , fontWeight:'bolder',display: { xs: 'none', md: 'flex' } }}
          >
                Registrate
          </Typography>
         
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormError error={errors.firebase}/>

        <Box sx={{width: 500, padding:'30px 0px 0px'}}>
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
            error={errors.name}
            />
        </Box>
        <FormError error={errors.name}/>
        <Box sx={{width: 500, padding:'30px 0px 0px'}}>
          <FormInput 
            fullWidth   
            label="Email" 
            id="Email" 
            placeholder='paola@gmail.com' 
            {...register("email", {
              required,
              pattern: patternEmail,
            })}
            error={errors.email}
          />
        </Box>
        <FormError error={errors.email}/>
        <Box sx={{width: 500, padding:'30px 0px 0px'}}>
          <FormInput 
          fullWidth 
          label="Contraseña" 
          id="password" 

          placeholder='contraseña' 
          type="password" 
          {...register('password',{
            minLength,
            validate: validateTrim,
          })}
          error={errors.password} //mui
          />
        </Box>
        <FormError error={errors.password}/>
        <Box sx={{width: 500, padding:'30px 0px 0px'}}>
          <FormInput 
          fullWidth 
          label="Confirmar Contraseña" 
          placeholder='contraseña' 
          type="password" 
          {...register('repassword',{
            validate: validateEquals(getValues('password')),
          })}
          />
        </Box>
        <FormError error={errors.repassword}/>

        <Box sx={{width: 500, marginTop:'20px',  display: 'flex', justifyContent: 'center'}}>
          <ButtonComponent variant="contained" type="submit">
            Registrarte
          </ButtonComponent>
        </Box>

        </form>
        
        <Box sx={{width: 500,  display: 'flex', justifyContent: 'center'}}>
          Iniciar sesión_<Link to="/logIn"> Aquí</Link>
        </Box>
      </Box>
    </>
  )
}