import React from 'react';
import {
  Grid,
  Stack,
  Box,
} from '@mui/material';

const StepperComponent = (props) => {
  const {
    onBoardingStepTracker,
    onBoardingStates,
  } = props;

  const DisplayStepper = () => (
    Object.keys(onBoardingStates).map((item, index) => {
      return (
        <Box
          key={item}
          sx={{
            borderStyle: 'solid',
            borderColor: '#00dbde',
            width: '5vw',
            borderWidth: '1px',
            height: '10px',
            borderRadius: '20px',
            ...(index === onBoardingStepTracker && {
              backgroundColor: '#00dbde',
            }),
          }}
        />
      );
    })
  );

  return (
    <Grid item xs={12} sx={{height: '2vh'}}>
      <Stack
        direction='row'
        justifyContent='center'
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{
          marginTop: '7vh',
        }}
      >
        <DisplayStepper />
      </Stack>
    </Grid>
  );
};

export default StepperComponent;