import React from 'react'
import styled from 'styled-components';
const ErrorMessageStyled = styled.div`
  margin-top: 10px;
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