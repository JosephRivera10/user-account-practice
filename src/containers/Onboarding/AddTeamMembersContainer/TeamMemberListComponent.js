import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import {Edit, Delete} from '@mui/icons-material';

const TeamMemberListComponent = (props) => {
  const {
    teamMembers,
    setTeamMembers,
    setNewData,
    setAddingTeamMember,
  } = props;

  if (!teamMembers) {
    return null;
  }

  return (
    <Grid
      container
      flexDirection='column'
    >
      {
        teamMembers.map((teamObject, index) => (
          <Grid
            item
            xs={4}
            key={teamObject.email}
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: '50vh',
              fontSize: '2rem',
              padding: '0.5rem 0.5rem 0.5rem 1rem',
              margin: '1rem',
            }}
          >
            <Typography>
              {`${teamObject.firstName} ${teamObject.lastName}`}
            </Typography>
            <IconButton
              onClick={() => {
                setNewData(teamObject);
                const filtered = teamMembers.filter((object) => object.email !== teamObject.email);
                setTeamMembers(filtered);
                setAddingTeamMember(true);
              }}
            >
              <Edit
                sx={{
                  color: '#00dbde'
                }}
              />
            </IconButton>
            <IconButton
              onClick={() => {
                const filtered = teamMembers.filter((object) => object.email !== teamObject.email);
                setTeamMembers(filtered);
              }}
            >
              <Delete
                sx={{
                  color: '#d32f2f'
                }}
              />
            </IconButton>
          </Grid>
        ))
      }
    </Grid>
  );
};

export default TeamMemberListComponent;