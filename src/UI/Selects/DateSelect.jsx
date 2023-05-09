import React from 'react'

import { useController } from 'react-hook-form'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { FormControl, FormHelperText } from '@mui/material'

import getDate from '../../Utils/Functions/getDate'


function DateSelect({ name, label, control }) {

  const {
    field: {
      value: dateValue,
      onChange: dateOnChange,
      onBlur: dateOnBlur,
      ...restDateFields
    },
    fieldState: {
      invalid,
      error,
    },
  } = useController({ name: name, control })

  const showValue = dateValue || null

  return (
    <FormControl sx={{ mt: '10px', mb: '10px' }} fullWidth error={invalid}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>

        <DatePicker
          label={label}

          ampm={false}
          format='dd-MM-yyyy'

          minDate={getDate('today')}
          maxDate={getDate('yearAfter')}

          defaultValue={null}
          value={showValue}
          onChange={date => {
            dateOnChange(date)
          }}
          onClose={date => {
            dateOnBlur(date)
          }}

          {...restDateFields}
        />

        <FormHelperText >
          {error?.message}
        </FormHelperText>
        
      </LocalizationProvider>
    </FormControl>
  )
}

export default DateSelect