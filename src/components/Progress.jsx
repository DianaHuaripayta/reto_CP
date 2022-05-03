import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function ProgressCircular() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly',marginTop: '220px'}}>
      <CircularProgress />
    </Box>
  );
}