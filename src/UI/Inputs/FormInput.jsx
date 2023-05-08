import React from 'react'
import { useController } from 'react-hook-form'
import { TextField } from '@mui/material'


function FormInput({ name, label, control, className }) {

  const {
    field: {
      value: inputValue,
      onChange: inputOnChange,
      ...restInputFields
    }
  } = useController({ name: name, control })

  const showValue = inputValue || ''

  return (
    <TextField
      className={className}
      sx={{
        mt: '10px',
        mb: '10px',
      }}
      label={label}
      value={showValue}
      multiline={true}
      rows={2}
      onChange={text => inputOnChange(text)}
      {...restInputFields}
    />
  )
}

export default FormInput