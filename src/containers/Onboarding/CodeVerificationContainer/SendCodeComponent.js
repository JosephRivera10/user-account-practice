import React, {useState} from 'react';
import {
  Grid,
  TextField,
} from '@mui/material';
import {
  sendVerificationCode,
} from '../../../utils/graphqlUtils';
import {
  formatToPhone,
  enforceFormat,
} from '../../../utils/formUtils';
import {
  PrimaryButtonStyling,
  SecondaryButtonStyling,
  TextFieldStyling,
} from '../../../utils/stylingUtils'
import LargeText from '../../../components/LargeText';
import PrimaryButton from '../../../components/PrimaryButton';

const SendCodeComponent = (props) => {
  const {
    setOnBoardingSteptracker,
    onBoardingStates,
    setSendingCode,
    textFieldValue,
    setTextFieldValue,
  } = props;
  const [helperTextMessage, setHelperTextMessage] = useState('');
  const [textFieldError, setTextFieldError] = useState(false);

  const handleSendingCode = () => {
    const success = sendVerificationCode(textFieldValue)
    if (success === 'success') {
      setSendingCode(true);
    } else {
      setHelperTextMessage(success);
      setTextFieldError(true);
    }
  };

  const handlBack = () => {
    setOnBoardingSteptracker(onBoardingStates.welcome)
  };

  return (
    <Grid
      item
      xs={9}
      sx={{
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid item xs={12}>
        <LargeText textValue="Send Verification Code" />
      </Grid>
      <Grid item xs={12} textAlign='center'>
        <TextField
          value={textFieldValue}
          error={textFieldError}
          helperText={helperTextMessage}
          sx={TextFieldStyling}
          onKeyDown={(event) => {
            setTextFieldValue(enforceFormat(event))
          }}
          onKeyUp={(event) => {
            setTextFieldValue(formatToPhone(event))
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{textAlign: 'center'}}>
        <Grid item xs={12}>
          <PrimaryButton
            buttonAction={handleSendingCode}
            buttonText='Send Code'
            stylingObject={PrimaryButtonStyling}
          />
        </Grid>
        <Grid item xs={12}>
          <PrimaryButton
            buttonAction={handlBack}
            buttonText='Back'
            stylingObject={SecondaryButtonStyling}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SendCodeComponent;