import React from 'react'

import { useController } from 'react-hook-form'

import { FormControl, TextField } from '@mui/material'


function FormInput({ name, label, control }) {

  const {
    field: {
      value: inputValue,
      onChange: inputOnChange,
      ...restInputFields
    }
  } = useController({ name: name, control })

  const showValue = inputValue || ''

  return (
    <FormControl sx={{ mt: '10px', mb: '10px' }} fullWidth>
      <TextField
        label={label}

        multiline={true}
        rows={2}
        
        value={showValue}
        onChange={text => inputOnChange(text)}

        {...restInputFields}
      />
    </FormControl>
  )
}

export default FormInput