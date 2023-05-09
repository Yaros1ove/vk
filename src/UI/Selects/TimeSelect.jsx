import React from 'react'

import { useController } from 'react-hook-form'

import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { FormControl, FormHelperText } from '@mui/material'

import getTime from '../../Utils/Functions/getTime'


function TimeSelect({ name, label, control }) {

  const {
    field: {
      value: timeValue,
      onChange: timeOnChange,
      ...restTimeFields
    },
    fieldState: {
      invalid,
      error,
    },
  } = useController({ name: name, control })

  const showValue = timeValue || null

  return (
    <FormControl sx={{ mt: '10px', mb: '10px', width: '50%' }} error={invalid}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label={label}

          ampm={false}
          timeSteps={{
            minutes: 1,
          }}

          minTime={getTime('7:59Am')}
          maxTime={getTime('10Pm')}

          defaultValue={null}
          value={showValue}
          onChange={time => {
            timeOnChange(time)
          }}

          {...restTimeFields}
        />

        <FormHelperText>
          {error?.message}
        </FormHelperText>
        
      </LocalizationProvider>
    </FormControl>
  )
}

export default TimeSelect