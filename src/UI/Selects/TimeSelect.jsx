import React from 'react'
import { useController } from 'react-hook-form'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'


function TimeSelect({ name, label, control, className }) {

  const {
    field: {
      value: timeValue,
      onChange: timeOnChange,
      ...restTimeFields
    }
  } = useController({ name: name, control })

  const showValue = timeValue || null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label={label}

        sx={{
          mt: '10px',
          mb: '10px',
        }}
        className={className}

        ampm={false}
        timeSteps={{
          minutes: 1,
        }}

        value={showValue}
        onChange={time => {
          timeOnChange(time)
        }}

        {...restTimeFields}
      />
    </LocalizationProvider>
  )
}

export default TimeSelect