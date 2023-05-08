import React from 'react'
import { useController } from 'react-hook-form'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import getDate from '../../Functions/getDate'


function DateSelect({ name, label, control, error, className }) {

  const {
    field: {
      value: dateValue,
      onChange: dateOnChange,
      ...restDateFields
    }
  } = useController({ name: name, control })

  const showValue = dateValue || null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label={label}

          sx={{
            mt: '10px',
            mb: '10px',
          }}
          className={className}


          ampm={false}
          format='dd-MM-yyyy'

          minDate={getDate('today')}
          maxDate={getDate('yearAfter')}

          value={showValue}
          onChange={date => {
            dateOnChange(date)
          }}

          {...restDateFields}
        />
        {error && <p className='error'>{error.message}</p>}
    </LocalizationProvider>
  )
}

export default DateSelect