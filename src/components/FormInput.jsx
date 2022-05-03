import React, { forwardRef} from 'react'
import TextField from '@mui/material/TextField';
const FormInput = forwardRef(({type, placeholder, onChange, onBlur, name, label, fullWidth, id, error}, ref) => {
 const classError = error ? true : false
  return (
          <TextField 
            error ={classError}//mui
            type={type} 
            placeholder={placeholder} 
            ref={ref} 
            onChange={onChange} 
            onBlur={onBlur}
            name={name}
            label={label}
            fullWidth={fullWidth}
            id={id}
            /> //props de react hook form y mui
        )
      }
)
export default FormInput