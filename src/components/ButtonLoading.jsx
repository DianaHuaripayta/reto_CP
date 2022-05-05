import React,{useState} from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send';
export const ButtonLoading = () => {
    const [loading] = useState(true);
   
  return (
    <>
      <LoadingButton
          size="small"
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
      >
              Loading
          </LoadingButton>
    </>
  )
}
