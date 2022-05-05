import React from 'react'
import Button from '@mui/material/Button';
import { ButtonLoading } from './ButtonLoading';

const ButtonComponent = ({children, color, disabled, size, variant, sx, endIcon, onClick, type, loading}) => {
  if(loading) return <ButtonLoading/>
  
  return (
    <Button 
    color={color}
    disabled={disabled}
    size={size}
    variant={variant}
    sx={sx}
    endIcon={endIcon}
    onClick={onClick}
    type={type}
    >
      {children}
    </Button>
  )
}
export default ButtonComponent