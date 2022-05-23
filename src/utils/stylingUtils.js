import {
  useMediaQuery,
} from '@mui/material';

export const DESKTOP_BREAKPOINT = (mediaHook) => mediaHook('(min-width:950px)');
export const MOBILE_BREAKPOINT = (mediaHook) => mediaHook('(max-width:500px)');

export const PrimaryButtonStyling = () => {
  return (
    {
      backgroundColor: '#00dbde',
      color: '#fff',
      borderRadius: '50vh',
      fontSize: '2.5rem',
      fontWeight: '600',
      lineHeight: '1.5',
      padding: '0px',
      ...(DESKTOP_BREAKPOINT(useMediaQuery) && {
        width: '35vw',
      }),
      ...(MOBILE_BREAKPOINT(useMediaQuery) && {
        fontSize: '2rem',
      }),
    }
  );
};

export const SecondaryButtonStyling = () => {
  return (
    {
      backgroundColor: 'transparent',
      color: '#707070',
      borderRadius: '50vh',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: '#707070',
      fontSize: '2.5rem',
      fontWeight: '600',
      lineHeight: '1.5',
      padding: '0px',
      marginTop: '1rem',
      ...(DESKTOP_BREAKPOINT(useMediaQuery) && {
        width: '35vw',
      }),
      ...(MOBILE_BREAKPOINT(useMediaQuery) && {
        fontSize: '2rem',
      }),
    }
  );
};

export const PrimaryButtonOutlineStyling = () => {
  return (
    {
      backgroundColor: 'transparent',
      color: '#00dbde',
      borderRadius: '50vh',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: '#00dbde',
      fontSize: '2.5rem',
      fontWeight: '600',
      lineHeight: '1.5',
      padding: '0px',
      marginTop: '1rem',
      ...(DESKTOP_BREAKPOINT(useMediaQuery) && {
        width: '35vw',
      }),
      ...(MOBILE_BREAKPOINT(useMediaQuery) && {
        fontSize: '2rem',
      }),
    }
  );
};

export const TextFieldStyling = () => {
  return (
    {
      backgroundColor: '#fff',
      borderRadius: '50vh',
      width: '60vw',
      '& .MuiInputBase-input': {
        fontSize: '2rem',
        fontWeight: '600',
        textAlign: 'center',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderStyle: 'none',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderStyle: 'solid',
          borderWidth: '3px',
          borderRadius: '50vh',
          borderColor: '#00dbde',
        }
      },
      '& .Mui-error': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderStyle: 'solid',
          borderWidth: '3px',
          borderRadius: '50vh',
        }
      },
      '& .MuiFormHelperText-root': {
        fontSize: '1.5rem',
        position: 'absolute',
        top: '83px',
      },
      ...(DESKTOP_BREAKPOINT(useMediaQuery) && {
        width: '30vw',
      }),
      ...(MOBILE_BREAKPOINT(useMediaQuery) && {
        '& .MuiInputBase-input': {
          fontSize: '1.5rem',
          fontWeight: '600',
          textAlign: 'center',
        },
      }),
    }
  );
};
