import React, {useState} from 'react';
import {
  Grid,
  TextField,
} from '@mui/material';
import {
  sendVerificationCode,
  confirmVerificationCode,
} from '../../../utils/graphqlUtils';
import {
  PrimaryButtonStyling,
  SecondaryButtonStyling,
  TextFieldStyling,
  PrimaryButtonOutlineStyling,
} from '../../../utils/stylingUtils'
import LargeText from '../../../components/LargeText';
import PrimaryButton from '../../../components/PrimaryButton';

const ConfirmCodeComponent = (props) => {
  const {
    setOnBoardingSteptracker,
    onBoardingStates,
    setSendingCode,
    textFieldValue
  } = props;
  const [codeValue, setCodeValue] = useState('');
  const [helperTextMessage, setHelperTextMessage] = useState('');
  const [buttonText, setButtonText] = useState('Re-Send Code');
  const [textFieldError, setTextFieldError] = useState(false);

  const delayEffect = () => {
    const result = sendVerificationCode(textFieldValue)
    if (result === 'success') {
      setButtonText(() => 'Re-Send Code');
    } else {
      setHelperTextMessage(result);
      setTextFieldError(true);
    }
  };

  const handleSendingCode = () => {
    setButtonText(() => 'Sending Code...')
    setTimeout(() => {
      delayEffect();
    }, 300)
  };

  const handleConfirmingCode = () => {
    const result = confirmVerificationCode(codeValue)
    if (result === 'success') {
      setOnBoardingSteptracker(onBoardingStates.propertyVerification);
    } else {
      setHelperTextMessage(result);
      setTextFieldError(true);
    }
  };

  const handleBack = () => {
    setSendingCode(false);
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
        <LargeText textValue="Enter Verification Code" />
      </Grid>
      <Grid item xs={12} textAlign='center'>
        <TextField
          value={codeValue}
          error={textFieldError}
          helperText={helperTextMessage}
          sx={TextFieldStyling}
          onChange={(event) => {
            setCodeValue(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{textAlign: 'center'}}>
        <Grid item xs={12}>
          <PrimaryButton
            buttonAction={handleConfirmingCode}
            buttonText='Verify Code'
            stylingObject={PrimaryButtonStyling}
          />
        </Grid>
        <Grid item xs={12}>
          <PrimaryButton
            buttonAction={handleSendingCode}
            buttonText={buttonText}
            stylingObject={PrimaryButtonOutlineStyling}
          />
        </Grid>
        <Grid item xs={12}>
          <PrimaryButton
            buttonAction={handleBack}
            buttonText="Back"
            stylingObject={SecondaryButtonStyling}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ConfirmCodeComponent;