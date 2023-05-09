import React from 'react'

import { useController } from 'react-hook-form'

import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material'

function MySelect({ name, label, options, control }) {

  const {
    field: {
      value: optionValue,
      onChange: optionOnChange,
      ...restOptionFields
    },
    fieldState: {
      invalid,
      error,
    },
  } = useController({ name: name, control })

  const showValue = optionValue || ''

  return (
    <FormControl sx={{ mt: '10px', mb: '10px' }} fullWidth error={false}>

      <InputLabel id='selectLabel'>{label}</InputLabel>

      <Select
        labelId='selectLabel'
        label={label}

        defaultValue={''}
        value={showValue}
        onChange={option => optionOnChange(option ? option.target.value : option)}

        {...restOptionFields}
      >
        {options.map(option => <MenuItem value={option} key={option}>{option}</MenuItem>)}
      </Select>

      <FormHelperText error={invalid}>
        {error?.message}
      </FormHelperText>
      
    </FormControl>
  )
}

export default MySelect