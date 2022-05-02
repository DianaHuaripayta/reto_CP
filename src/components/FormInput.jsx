import React, { forwardRef } from 'react'
import TextField from '@mui/material/TextField';
const FormInput = forwardRef(({type, placeholder, onChange, onBlur, name, label, fullWidth, id}, ref) => {
        return (
          <TextField type={type} 
            placeholder={placeholder} 
            ref={ref} 
            onChange={onChange} 
            onBlur={onBlur}
            
            fullWidth={fullWidth}
            id={id}
            /> //props de react hook form y mui
        )
      }
)
export default FormInput
// name={name}
// label={label}