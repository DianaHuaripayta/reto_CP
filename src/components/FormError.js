import React from 'react'
import styled from 'styled-components';
const ErrorMessageStyled = styled.p`
  color: #d82725;
`;
const FormError = ({error}) => {
  return (
      <>
          {error && <ErrorMessageStyled>{error.message}</ErrorMessageStyled>}
      </>

  )
}
export default FormError
//{error.message}