import './App.css';
import React, { useState } from 'react';
import {
  Container,
} from '@mui/material';
import OnboardingContainer from './containers/Onboarding';
import RenderIf from './components/RenderIf';


const App = () => {
  const [isRootUserFirstLogin, setIsRootUserFirstLogin] = useState(true);

  return (
    <Container
      maxWidth="false"
      disableGutters={false}
      sx={{
        padding: '0px !important' ,
      }}
    >
      <RenderIf isTrue={isRootUserFirstLogin}>
        <OnboardingContainer setIsRootUserFirstLogin={setIsRootUserFirstLogin}/>
      </RenderIf>
    </Container>
  );
}

export default App;
