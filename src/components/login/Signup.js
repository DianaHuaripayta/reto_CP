import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/authContext";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
export default function Signup() {
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

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
          console.log(error.code);
          switch (error.code) {
              case "auth/email-already-in-use": //errer de firebase
                  setError("firebase", {
                      message: "Usuario ya registrado",
                  });
                  break;
              case "auth/invalid-email":
                  setError("firebase", {
                      message: "Formato email no válido",
                  });
                  break;
              default:
                  console.log("Ocurrio un error en el server");
          }
      }
  };

  // const [email, setEmail] = useState("");
  // const [error, setError] = useState("");
  // const [password, setPassword] = useState("");


 
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await signUp(email, password);
  //     navigate("/dulceria");
  //   } catch (err) {
  //     setError(err.message);
  //     console.log(setError(err.message))
  //   }
  // };
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
        {errors.firebase && <p>{errors.firebase.message}</p>}
        <Box sx={{width: 500, margin:'10px 0px'}}>
          <TextField 
            fullWidth 
            label="Nombre" 
            id="text" 
            placeholder='Paola Sonia' 
            {...register('name', { required: true, minLength: 3 })}
            />
             {errors.name && <p>error maxlegth 3</p>}
        </Box>
        <Box sx={{width: 500, margin:'10px 0px'}}>
          <TextField 
            fullWidth 
            label="Email" 
            id="Email" 
            placeholder='paola@gmail.com' 
            {...register("email", {
              required: {
                  value: true,
                  message: "Campo obligatorio",
              },
              pattern: {
                  value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
                  message: "Formato de email incorrecto",
              },
          })}
          />
          {errors.email && <p>{errors.email.message}</p>}
           {/* esta manera */}

        </Box>
        <Box sx={{width: 500, margin:'10px 0px'}}>
          <TextField 
          fullWidth 
          label="Contraseña" 
          id="password" 
          placeholder='contraseña' 
          type="password" 
          {...register('password',{
            minLength:{
              value: 6,
              message:'Minimo 6 caracteres'
            },
            validate: { //este caso valida la entrada de espacios
              trim: (v) => {
                  if (!v.trim()) {
                      return "No seas 🤡, escribe algo";
                  }
                  return true;
              },
          },
            
          })}/>
          {errors.password && <p>{errors.password.message}</p>} 
          {/* esta manera */}
        </Box>
        <Box sx={{width: 500, margin:'10px 0px'}}>
          <TextField 
          fullWidth 
          label="Confirmar Contraseña" 
          id="password" 
          placeholder='contraseña' 
          type="password" 
          {...register('repassword',{
            minLength:{
              value: 6,
              message:'Minimo 6 caracteres'
            },
            validate: {
              equals: (v) =>
                  v === getValues("password") ||
                  "No coinciden las contraseñas",
            },
          })}/>
           {errors.repassword && <p>{errors.repassword.message}</p>} 
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
// onChange={(e) => setEmail(e.target.value)}
// onChange={(e) => setEmail(e.target.value)}
// onChange={(e) => setPassword(e.target.value)}