import React from 'react';
import { Grid } from '@mui/material';
import Header2 from '../../../components/Header2'
import LargeText from '../../../components/LargeText';
import PrimaryButton from '../../../components/PrimaryButton';
import { PrimaryButtonStyling } from '../../../utils/stylingUtils';

const WelcomeContainer = (props) => {
  const {
    setOnBoardingSteptracker,
    onBoardingStates,
  } = props;

  const handleButtonAction = () => {
    setOnBoardingSteptracker(onBoardingStates.codeVerification)
  };

  return (
    <Grid
      item
      xs={9}
      sx={{
        marginTop: '3%',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid item xs={12}>
        <Header2 headerValue='Welcome!' />
      </Grid>
      <Grid item xs={12}>
        <LargeText textValue="Let's get your account setup" />
      </Grid>
      <Grid item xs={12} sx={{textAlign: 'center'}}>
        <PrimaryButton
          buttonAction={handleButtonAction}
          buttonText='Next'
          stylingObject={PrimaryButtonStyling}
        />
      </Grid>
    </Grid>
  );
};

export default WelcomeContainer;