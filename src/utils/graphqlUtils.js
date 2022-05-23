import { validatePhoneNumber } from './formUtils';
import { PropertyInfo } from './mockData';
import { RootUserInfo } from './mockData';

export const sendVerificationCode = (phoneNumber) => {
  if (validatePhoneNumber(phoneNumber)) {
    // send code out
    return 'success';
  } else {
    return 'Phone number not valid';
  }
};

export const confirmVerificationCode = (verificationCode) => {
  // confirm code
  return 'success';
}

export const getPropertyInfoQuery = () => PropertyInfo;

export const updatePropertyInfoMutation = (data) => {
  console.log('property data update mutation', data);
};

export const getRootUserInfoQuery = () => RootUserInfo;

export const updateRootUserInfoMutation = (data) => {
  console.log('root user info update mutation', data);
};

export const updateTeamMembers = (data) => {
  console.log('team members added', data);
};