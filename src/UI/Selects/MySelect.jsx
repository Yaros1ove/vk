import React from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { useController } from 'react-hook-form'

function MySelect({ name, label, options, control, error }) {

  const {
    field: {
      value: optionValue,
      onChange: optionOnChange,
      ...restOptionFields
    }
  } = useController({ name: name, control })

  const showValue = optionValue || ''

  return (
    <FormControl sx={{ mt: '10px' }} fullWidth>
      <InputLabel id='selectLabel'>{label}</InputLabel>
      <Select
        sx={{ mb: '10px' }}
        labelId='selectLabel'
        label={label}
        value={showValue}
        defaultValue=''
        onChange={option => optionOnChange(option ? option.target.value : option)}
        {...restOptionFields}
      >
        {options.map(option => <MenuItem value={option} key={option}>{option}</MenuItem>)}
      </Select>
      {error && <p className='error'>{error.message}</p>}
    </FormControl>
  )
}

export default MySelect