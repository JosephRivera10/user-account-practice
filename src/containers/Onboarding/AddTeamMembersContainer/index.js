import React, { useState } from 'react';
import { Grid, useMediaQuery, Fab, Typography } from '@mui/material';
import {Add} from '@mui/icons-material';
import LargeText from '../../../components/LargeText';
import PrimaryButton from '../../../components/PrimaryButton';
import RenderFields from '../../../components/RenderFields';
import { PrimaryButtonStyling, SecondaryButtonStyling } from '../../../utils/stylingUtils';
import { updateTeamMembers } from '../../../utils/graphqlUtils';
import { TeamMemberField } from '../../../utils/dataFieldUtils'
import { MOBILE_BREAKPOINT } from '../../../utils/stylingUtils';
import RenderIf from '../../../components/RenderIf';
import TeamMemberListComponent from './TeamMemberListComponent';
import { isEmpty } from 'lodash';

const AddTeamMembersContainer = (props) => {
  const {
    setOnBoardingSteptracker,
    onBoardingStates,
  } = props;
  const [newData, setNewData] = useState({});
  const [teamMembers, setTeamMembers] = useState([]);
  const [addingTeamMember, setAddingTeamMember] = useState(false);
  const [formError, setFormError] = useState(false);

  const handlSkip = () => {
    setOnBoardingSteptracker(onBoardingStates.finish);
  };

  const handleBack = () => {
    setOnBoardingSteptracker(onBoardingStates.profileVerification);
  };

  const handleBackToPreviousState = () => {
    setAddingTeamMember(false);
  };

  const handleSave = () => {
    if (isEmpty(newData)) {
      setFormError(true);
      return;
    }
    // TODO set in local storage
    // check if data in local storage
    setTeamMembers(teamMembers => [...teamMembers, newData]);
    setAddingTeamMember(false);
  };

  const handleAddTeamMember = () => {
    setNewData({})
    setAddingTeamMember(true);
  };

  const handleConfirmation = () => {
    // graphql mutation update team members
    updateTeamMembers(teamMembers);
    setOnBoardingSteptracker(onBoardingStates.finish);
  }

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
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginBottom: '5%',
          ...(MOBILE_BREAKPOINT(useMediaQuery) && {
            marginBottom: '15%',
          }),
        }}
      >
        <LargeText textValue="Add Team Members" />
        <Fab
          onClick={() => {
            handleAddTeamMember();
          }}
          sx={{
            marginLeft: '2rem',
            backgroundColor: '#00dbde',
            color: '#fff',
          }}
        >
          <Add sx={{fontSize: '2rem'}} />
        </Fab>
      </Grid>
      <RenderIf isTrue={addingTeamMember}>
        <Grid
          item
          xs={12}
          textAlign='center'
          sx={{
            marginBottom: '5%',
          }}
        >
          <RenderFields
            fields={TeamMemberField.TeamMemberFields}
            data={newData}
            setData={setNewData}
            setFormError={setFormError}
          />
        </Grid>
      </RenderIf>
      <RenderIf isTrue={!addingTeamMember && teamMembers.length > 0}>
        <Grid
          item
          xs={12}
          textAlign='center'
        >
          <TeamMemberListComponent
            teamMembers={teamMembers}
            setTeamMembers={setTeamMembers}
            setNewData={setNewData}
            setAddingTeamMember={setAddingTeamMember}
          />
        </Grid>
      </RenderIf>
      <RenderIf isTrue={!addingTeamMember}>
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
              buttonAction={teamMembers.length === 0 ? handlSkip : handleConfirmation}
              buttonText={teamMembers.length === 0 ? 'Skip' : 'Confirm'}
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
      </RenderIf>
      <RenderIf isTrue={addingTeamMember}>
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
          <RenderIf isTrue={formError === true}>
            <Typography
              sx={{color: '#d32f2f'}}
              variant='h5'
            >
              Please fill out the form
            </Typography>
          </RenderIf>
          <Grid item xs={12}>
            <PrimaryButton
              buttonAction={handleSave}
              buttonText={'Save'}
              stylingObject={PrimaryButtonStyling}
              disabledState={formError}
            />
          </Grid>
          <Grid item xs={12}>
            <PrimaryButton
              buttonAction={handleBackToPreviousState}
              buttonText='Back'
              stylingObject={SecondaryButtonStyling}
            />
          </Grid>
        </Grid>
      </RenderIf>

    </Grid>
  )
};

export default AddTeamMembersContainer;