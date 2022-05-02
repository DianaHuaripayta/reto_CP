import React from 'react'
import Button from '@mui/material/Button';

const ButtonComponent = ({children, color, disabled, size, variant, sx, endIcon, onClick, type}) => {
  return (
    <Button children={children} 
    color={color}
    disabled={disabled}
    size={size}
    variant={variant}
    sx={sx}
    endIcon={endIcon}
    onClick={onClick}
    type={type}
    />
  )
}
export default ButtonComponent