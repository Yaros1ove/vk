import React from 'react'
import { useController } from 'react-hook-form'
import Select from 'react-select'

import styles from './Select.module.sass'

function FormSelect({ name, labelName, options, control, error }) {

  const {
    field: {
      value: optionValue,
      onChange: optionOnChange,
      ...restOptionFields
    }
  } = useController({ name: name, control })

  const showValue = optionValue ? options.find(option => option.value === optionValue) : optionValue

  return (
    <label>
      {labelName}
      <Select
        className={styles.select}
        placeholder='выбрать'
        isClearable
        options={options}
        value={showValue}
        onChange={option => optionOnChange(option ? option.value : option)}
        {...restOptionFields}
      />
      {error && <p className='error'>{error.message}</p>}
    </label>
  )
}

export default FormSelect