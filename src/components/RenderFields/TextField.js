import React, { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { MOBILE_BREAKPOINT } from '../../utils/stylingUtils';

const TextFieldComponent = (props) => {
  const {
    fieldOption,
    data,
    handleChange,
    handleBlur,
  } = props;

  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);
  const [fieldValue, setFieldValue] = useState(fieldOption.fieldName === Object.keys(data).filter((item) => fieldOption.fieldName === item)[0] ? data[fieldOption.fieldName] : '');

  console.log('field option', fieldOption)

  const Options = fieldOption.selectOptions.map((option) => (
    <MenuItem key={option} value={option}>
      {option}
    </MenuItem>
  ));

  return (
    <TextField
      label={fieldOption.label}
      value={fieldValue}
      helperText={helperText}
      InputLabelProps={{ shrink: true }}
      type={fieldOption.type}
      select={fieldOption.select}
      error={error}
      onBlur={(e) => handleBlur(e.target.value, setFieldValue, fieldOption, setError, setHelperText)}
      onChange={(e) => handleChange(e.target.value, setFieldValue, fieldOption.fieldName)}
      children={Options}
      sx={{
        backgroundColor: '#fff',
        borderRadius: '50vh',
        minWidth: '20vw',
        '& .MuiInputBase-input': {
          fontSize: '1.5rem',
          ...(MOBILE_BREAKPOINT(useMediaQuery) && {
            fontSize: '1rem',
          })
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
        '& .MuiFormLabel-root': {
          color: '#fff',
          fontSize: '3rem',
          top: '-2.5rem',
          ...(MOBILE_BREAKPOINT(useMediaQuery) && {
            fontSize: '2rem',
            top: '-2rem',
          }),
          '&.Mui-focused': {
            color: '#00dbde',
            top: '-2.5rem',
            fontSize: '3rem',
            ...(MOBILE_BREAKPOINT(useMediaQuery) && {
              fontSize: '2rem',
              top: '-2rem',
            }),
          },
          '&.Mui-error': {
            color: '#d32f2f',
            top: '-2.5rem',
            fontSize: '3rem',
            ...(MOBILE_BREAKPOINT(useMediaQuery) && {
              fontSize: '2rem',
              top: '-2rem',
            }),
          },
        },
        '& .Mui-focused': {
          '& .MuiFormControl-root-MuiTextfield-root': {
            color: '#00dbde',
          }
        },

        '& .Mui-error': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderStyle: 'solid',
            borderWidth: '3px',
            borderRadius: '50vh',
          },
        },

        '& .MuiFormHelperText-root': {
          position: 'absolute',
          top: '3.5rem',
          fontSize: '2rem',
        }
      }}
    />
  );
};

export default TextFieldComponent;
