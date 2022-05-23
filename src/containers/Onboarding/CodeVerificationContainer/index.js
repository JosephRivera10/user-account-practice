import React, {useState} from 'react';
import RenderIf from '../../../components/RenderIf';
import SendCodeComponent from './SendCodeComponent';
import ConfirmCodeComponent from './ConfirmCodeComponent';
import { formatToPhone } from '../../../utils/formUtils';

// get from user info from redux state
const userNumber = {
  target: {
    value: '7035865779'
  }
};
const CodeVerificationContainer = (props) => {
  const {
    setOnBoardingSteptracker,
    onBoardingStates,
  } = props;
  const [sendingCode, setSendingCode] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState(formatToPhone(userNumber));

  return (
    <>
      <RenderIf isTrue={!sendingCode}>
        <SendCodeComponent
          setOnBoardingSteptracker={setOnBoardingSteptracker}
          onBoardingStates={onBoardingStates}
          setSendingCode={setSendingCode}
          setTextFieldValue={setTextFieldValue}
          textFieldValue={textFieldValue}
        />
      </RenderIf>
      <RenderIf isTrue={sendingCode}>
        <ConfirmCodeComponent
          setOnBoardingSteptracker={setOnBoardingSteptracker}
          onBoardingStates={onBoardingStates}
          setSendingCode={setSendingCode}
          setTextFieldValue={setTextFieldValue}
          textFieldValue={textFieldValue}
        />
      </RenderIf>
    </>
  );
};

export default CodeVerificationContainer;