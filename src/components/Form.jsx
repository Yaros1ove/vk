import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from '../Utils/yup'

import DateSelect from '../UI/Selects/DateSelect'
import TimeSelect from '../UI/Selects/TimeSelect'
import FormInput from '../UI/Inputs/FormInput'
import MySelect from '../UI/Selects/MySelect'
import { Button, FormHelperText, Typography } from '@mui/material'

import createNumbersArray from '../Utils/Functions/createNumbersArray'
import validateForm from '../Utils/Functions/validateForm'
import createFormDate from '../Utils/Functions/createFormDate'

// initializing options arrays for selects
const towers = ['А', 'Б']

const minFloor = 3, maxFloor = 27
const floors = createNumbersArray(minFloor, maxFloor)

const minNegotiation = 1, maxNegotiation = 10
const negotiations = createNumbersArray(minNegotiation, maxNegotiation)


function Form() {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  
  const isError = !!error

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  })

  const onReset = () => {

    setData(null)
    setError(null)

    reset()
  }

  const onSubmit = (form) => {
    const date = form.date

    // merging date and time
    const from = createFormDate({ date: date, time: form.from })
    const to = createFormDate({ date: date, time: form.to })

    delete form.date
    form.from = from
    form.to = to

    // post-validation for [FROM before TO]
    const validation = validateForm(form)

    if (validation.error) {
      setError(validation.error)
      return
    }


    setData({ ...form })
    setError(null)

    reset()

    console.log(JSON.stringify(form, null, 2))
  }

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>

      <MySelect
        name='tower'
        label='Башня'
        options={towers}
        control={control}
      />

      <MySelect
        name='floor'
        label='Этаж'
        options={floors}
        control={control}
      />

      <MySelect
        name='negotiation'
        label='Номер переговорной'
        options={negotiations}
        control={control}
      />

      <DateSelect
        name='date'
        label='Дата'
        control={control}
      />

      <TimeSelect
        name='from'
        label='C'
        control={control}
      />

      <TimeSelect
        name='to'
        label='До'
        control={control}
      />

      {/* Error of post-validation */}
      <FormHelperText sx={{ width: '100%', textAlign: 'center' }} error={isError}>
        {error}
      </FormHelperText>

      <FormInput
        name='comment'
        label='Комментарий'
        control={control}
        error={errors.comment}
      />

      <div className='formButtons'>
        <Button
          variant='outlined'
          type='button'
          onClick={onReset}
        >
          Очистить
        </Button>

        <Button
          variant='contained'
          type='submit'
        >
          Отправить
        </Button>
      </div>

      {/* Printing form fields for visibility */}
      {data && Object.keys(data).map(key => {
        return <Typography variant='body1' key={key}>
          {`${key}: ${data[key]}`}
        </Typography>
      })}

      {data && <Typography align='center' variant='body2'>
        Продублировано в консоль в формате JSON
      </Typography>}

    </form>
  )
}

export default Form