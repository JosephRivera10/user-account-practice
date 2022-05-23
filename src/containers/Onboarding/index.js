import React, { useState } from 'react';
import {
  Grid,
} from '@mui/material';
import backgroundImage from '../../image001.png';
import StepperComponent from '../../components/StepperComponent';
import WelcomeContainer from './WelcomeContainer';
import CodeVerificationContainer from './CodeVerificationContainer';
import PropertyVerificationContainer from './PropertyVerificationContainer';
import RootUserVerificationContainer from './RootUserVerificationContainer';
import AddTeamMembersContainer from './AddTeamMembersContainer';
import FinishContainer from './FinishContainer';
import RenderIf from '../../components/RenderIf';

const ONBOARDING_STATES = {
  welcome: 0,
  codeVerification: 1,
  propertyVerification: 2,
  profileVerification: 3,
  addTeamMembers: 4,
  finish: 5,
}

const OnboardingContainer = (props) => {
  const {
    setIsRootUserFirstLogin,
  } = props;
  const [onBoardingStepTracker, setOnBoardingSteptracker] = useState(ONBOARDING_STATES.welcome);

  return (
    <Grid
      container
      justifyContent='center'
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <StepperComponent
        onBoardingStepTracker={onBoardingStepTracker}
        onBoardingStates={ONBOARDING_STATES}
      />
      <RenderIf isTrue={onBoardingStepTracker === ONBOARDING_STATES.welcome}>
        <WelcomeContainer
          setOnBoardingSteptracker={setOnBoardingSteptracker}
          onBoardingStates={ONBOARDING_STATES}
        />
      </RenderIf>
      <RenderIf isTrue={onBoardingStepTracker === ONBOARDING_STATES.codeVerification}>
        <CodeVerificationContainer
          setOnBoardingSteptracker={setOnBoardingSteptracker}
          onBoardingStates={ONBOARDING_STATES}
        />
      </RenderIf>
      <RenderIf isTrue={onBoardingStepTracker === ONBOARDING_STATES.propertyVerification}>
        <PropertyVerificationContainer
          setOnBoardingSteptracker={setOnBoardingSteptracker}
          onBoardingStates={ONBOARDING_STATES}
        />
      </RenderIf>
      <RenderIf isTrue={onBoardingStepTracker === ONBOARDING_STATES.profileVerification}>
        <RootUserVerificationContainer
          setOnBoardingSteptracker={setOnBoardingSteptracker}
          onBoardingStates={ONBOARDING_STATES}
        />
      </RenderIf>
      <RenderIf isTrue={onBoardingStepTracker === ONBOARDING_STATES.addTeamMembers}>
        <AddTeamMembersContainer
          setOnBoardingSteptracker={setOnBoardingSteptracker}
          onBoardingStates={ONBOARDING_STATES}
        />
      </RenderIf>
      <RenderIf isTrue={onBoardingStepTracker === ONBOARDING_STATES.finish}>
        <FinishContainer
          setOnBoardingSteptracker={setOnBoardingSteptracker}
          onBoardingStates={ONBOARDING_STATES}
          setIsRootUserFirstLogin={setIsRootUserFirstLogin}
        />
      </RenderIf>
    </Grid>

  );
}

export default OnboardingContainer;