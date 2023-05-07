import React from 'react'
import { useController } from 'react-hook-form'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

function TimeSelect({ name, label, control, error }) {

  const {
    field: {
      value: optionValue,
      onChange: optionOnChange,
      ...restOptionFields
    }
  } = useController({ name: name, control })

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label={label}
        slotProps={{
          actionBar: {
            actions: ['clear']
          }
        }}
        ampm={false}
        onAccept={time => optionOnChange(time.getTime())}
        {...restOptionFields}
      />
      {error && <p className='error'>{error.message}</p>}
    </LocalizationProvider>
  )
}

export default TimeSelect