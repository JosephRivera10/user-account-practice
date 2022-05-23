import React from 'react';
import { Typography } from '@mui/material';

const Header2 = (props) => {
  const {
    headerValue
  } = props;

  return (
    <Typography
      variant='h2'
      sx={{
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {headerValue}
    </Typography>
  );
};

export default Header2;