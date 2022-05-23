import React from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import { MOBILE_BREAKPOINT } from '../../utils/stylingUtils';

const LargeText = (props) => {
  const {
    textValue
  } = props;

  return (
    <Typography
      variant={MOBILE_BREAKPOINT(useMediaQuery) ? 'h5' : 'h4'}
      sx={{
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {textValue}
    </Typography>
  );
};

export default LargeText;