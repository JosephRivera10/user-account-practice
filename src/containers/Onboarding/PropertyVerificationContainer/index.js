import React, { useState, useEffect } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import LargeText from '../../../components/LargeText';
import PrimaryButton from '../../../components/PrimaryButton';
import RenderFields from '../../../components/RenderFields';
import RenderIf from '../../../components/RenderIf';
import { PrimaryButtonStyling, SecondaryButtonStyling } from '../../../utils/stylingUtils';
import { getPropertyInfoQuery, updatePropertyInfoMutation } from '../../../utils/graphqlUtils';
import { PropertyField } from '../../../utils/dataFieldUtils'
import { MOBILE_BREAKPOINT } from '../../../utils/stylingUtils';
import { isEmpty } from 'lodash';

const PropertyVerificationContainer = (props) => {
  const {
    setOnBoardingSteptracker,
    onBoardingStates,
  } = props;
  const [newPropertyData, setNewPropertyData] = useState({});
  const [formError, setFormError] = useState(false);

  const getPropertyInfo = () => {
    setNewPropertyData(getPropertyInfoQuery());
  }

  const hanldleConfirmation = () => {
    // do something
    updatePropertyInfoMutation(newPropertyData);
    setOnBoardingSteptracker(onBoardingStates.profileVerification)
  };

  const handleBack = () => {
    setOnBoardingSteptracker(onBoardingStates.codeVerification)
  };

  // not sure if I need to wrap in useEffect
  useEffect(() => {
    getPropertyInfo()
  }, []);

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
      <Grid
        item
        xs={12}
        sx={{
          marginBottom: '12%',
          ...(MOBILE_BREAKPOINT(useMediaQuery) && {
            marginBottom: '15%',
          }),
        }}
      >
        <LargeText textValue="Verify Your Property Information" />
      </Grid>
      <Grid
        item
        xs={12}
        textAlign='center'
      >
        <RenderIf isTrue={!isEmpty(newPropertyData)}>
          <RenderFields
            fields={PropertyField.PropertyFields}
            data={newPropertyData}
            setData={setNewPropertyData}
            setFormError={setFormError}
          />
        </RenderIf>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: 'center',
          marginTop: '5%',
          ...(MOBILE_BREAKPOINT(useMediaQuery) && {
            marginTop: '15%',
          }),
        }}>
        <Grid item xs={12}>
          <PrimaryButton
            buttonAction={hanldleConfirmation}
            buttonText='Confirm'
            stylingObject={PrimaryButtonStyling}
            disabledState={formError}
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
  )
};

export default PropertyVerificationContainer;