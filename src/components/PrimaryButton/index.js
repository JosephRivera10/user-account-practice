import React from 'react';
import { Button } from '@mui/material';

const PrimaryButton = (props) => {
  const {
    buttonAction,
    buttonText,
    stylingObject,
    disabledState,
  } = props;

  return (
    <Button
      size='large'
      variant='contained'
      fullWidth
      disabled={disabledState}
      sx={stylingObject}
      onClick={() => {
        buttonAction();
      }}
    >
      {buttonText}
    </Button>
  );
};

export default PrimaryButton;