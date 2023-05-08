import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import DateSelect from '../UI/Selects/DateSelect'
import TimeSelect from '../UI/Selects/TimeSelect'
import FormInput from '../UI/Inputs/FormInput'
import { Button } from '@mui/material'
import MySelect from '../UI/Selects/MySelect'
import getDate from '../Functions/getDate'

const schema = yup.object({
  tower: yup.string().required('Выберите башню'),
  floor: yup.number().required('Выберите этаж'),
  negotiation: yup.number().required('Выберите переговорную'),
  date: yup.date().typeError('').min(getDate('today'), 'Нельзя выбрать дату раньше текущего дня').max(getDate('yearAfter'), 'Время выбора даты ограничивается годом вперед').required('Выберите дату'),
  from: yup.date().typeError('').required('Выберите время начала'),
  to: yup.date().typeError('').required('Выберите время окончания'),
  comment: yup.string(),
})


const towers = ['А', 'Б']


const floors = []
const minFloor = 3, maxFloor = 27

for (let i = minFloor; i <= maxFloor; i++) {
  floors.push(i)
}


const negotiations = []
const minNegotiation = 1, maxNegotiation = 10

for (let i = minNegotiation; i <= maxNegotiation; i++) {
  negotiations.push(i)
}

function Form() {

  const [data, setData] = useState()

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onReset = () => reset({
    tower: null,
    floor: null,
    negotiation: null,
    date: null,
    from: null,
    to: null,
    comment: '',
  })

  const onSubmit = (data) => {

    setData({ ...data })
    onReset()
    console.log(data)
  }

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>

      <MySelect
        name='tower'
        label='Башня'
        options={towers}
        control={control}
        error={errors.tower}
        className={'select'}
      />

      <MySelect
        name='floor'
        label='Этаж'
        options={floors}
        control={control}
        error={errors.floor}
        className={'select'}
      />

      <MySelect
        name='negotiation'
        label='Номер переговорной'
        options={negotiations}
        control={control}
        error={errors.negotiation}
        className={'select'}
      />

      <DateSelect
        name='date'
        label='Дата'
        control={control}
        error={errors.date}
        className={'dateSelect'}
      />

      <TimeSelect
        name='from'
        label='C'
        control={control}
        className={'timeSelect'}
      />

      <TimeSelect
        name='to'
        label='До'
        control={control}
        className={'timeSelect'}
      />

      <p className='error'>
        <span className='error__time'>{errors.from ? errors.from.message : ''}</span>
        <span className='error__time'>{errors.to ? errors.to.message : ''}</span>
      </p>

      <FormInput
        name='comment'
        label='Комментарий'
        control={control}
        className={'comment'}
      />

      <div className='buttons'>
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

      {/* {<pre>{JSON.stringify(errors, null, 2)}</pre>} */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </form>
  )
}

export default Form