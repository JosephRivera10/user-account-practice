import React, { useCallback } from 'react';
import { Grid } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { MOBILE_BREAKPOINT } from '../../utils/stylingUtils';
import TextFieldComponent from './TextField';

const RenderFields = (props) => {
  const {
    data,
    fields,
    setData,
    setFormError,
  } = props;

  const updateField = useCallback((value, field) => {
    data[field] = value;
    setData(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBlur = (value, setValue, fieldOption, setError, setHelperText) => {
    if (value === undefined) {
      setValue('');
      return;
    }
    if (value === '' && fieldOption.requiredField) {
      setValue('')
      setHelperText('Required')
      setError(true);
      setFormError(true);
      return;
    }

    setHelperText('')
    setError(false)
    setFormError(false)
    updateField(value, fieldOption.fieldName)
  };

  const handleChange = (value, setValue, fieldName) => {
    console.log('value on chnage', value);

    if (value === undefined) {
      setValue('');
      return;
    }
    setValue(value);
    updateField(value, fieldName)
  };

  const RenderWrapper = useCallback(() => (
    fields.map((fieldOption) => (
      <Grid
        item
        xs={6}
        key={fieldOption.fieldName}
      >
        <TextFieldComponent
          fieldOption={fieldOption}
          data={data}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </Grid>
    ))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [data, fields]);

  if (!data) {
    return null;
  }

  return (
    <Grid
      container
      spacing={MOBILE_BREAKPOINT(useMediaQuery) ? 8 : 15}>
      <RenderWrapper />
    </Grid>
  );
};

export default RenderFields;
