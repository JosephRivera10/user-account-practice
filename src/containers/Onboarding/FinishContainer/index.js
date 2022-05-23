import React from 'react';
import { Grid } from '@mui/material';
import Header2 from '../../../components/Header2'
import LargeText from '../../../components/LargeText';
import PrimaryButton from '../../../components/PrimaryButton';
import { PrimaryButtonStyling, SecondaryButtonStyling } from '../../../utils/stylingUtils';

const FinishContainer = (props) => {
  const {
    setOnBoardingSteptracker,
    onBoardingStates,
    setIsRootUserFirstLogin,
  } = props;

  const handleButtonAction = () => {
    setIsRootUserFirstLogin(false)
  };

  const handleBack = () => {
    setOnBoardingSteptracker(onBoardingStates.addTeamMembers)
  }

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
        <Header2 headerValue='Congratulations!' />
      </Grid>
      <Grid item xs={12}>
        <LargeText textValue="Good job you're all set" />
      </Grid>
      <Grid item xs={12} sx={{textAlign: 'center'}}>
        <Grid item xs={12}>
          <PrimaryButton
            buttonAction={handleButtonAction}
            buttonText='Start Exploring'
            stylingObject={PrimaryButtonStyling}
          />
        </Grid>
        <Grid item xs={12}>
          <PrimaryButton
            buttonAction={handleBack}
            buttonText='Back'
            stylingObject={SecondaryButtonStyling}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FinishContainer;