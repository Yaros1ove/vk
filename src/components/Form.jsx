import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import FormSelect from '../UI/Selects/FormSelect'
import DateSelect from '../UI/Selects/DateSelect'
import TimeSelect from '../UI/Selects/TimeSelect'

const schema = yup.object({
  tower: yup.string().required('Выберите башню'),
  floor: yup.number().positive('Выберите этаж').required('Выберите этаж'),
  negotiation: yup.number().positive('Выберите переговорную').required('Выберите переговорную'),
  date: yup.date().required('Выберите дату'),
  from: yup.number().required('Выберите время начала'),
  to: yup.number().required('Выберите время окончания'),
})


const towers = [
  { value: 'А', label: 'А' },
  { value: 'Б', label: 'Б' },
]


const floors = []
const minFloor = 3, maxFloor = 27

for (let i = minFloor; i <= maxFloor; i++) {
  floors.push({
    value: i,
    label: i,
  })
}


const negotiations = []
const minNegotiation = 1, maxNegotiation = 10

for (let i = minNegotiation; i <= maxNegotiation; i++) {
  negotiations.push({
    value: i,
    label: i,
  })
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
    tower: '',
    floor: 0,
    negotiation: 0,
    date: new Date(),
    from: new Date(),
    to: NaN,
  })

  const onSubmit = (data) => {
    setData({ ...data })
    onReset()
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <FormSelect
        name='tower'
        labelName='Башня'
        options={towers}
        control={control}
        error={errors.tower}
      />

      <FormSelect
        name='floor'
        labelName='Этаж'
        options={floors}
        control={control}
        error={errors.floor}
      />

      <FormSelect
        name='negotiation'
        labelName='Переговорная'
        options={negotiations}
        control={control}
        error={errors.negotiation}
      />

      <DateSelect
        name='date'
        label='Дата'
        control={control}
        error={errors.date}
      />

      <TimeSelect
        name='from'
        label='C'
        control={control}
        error={errors.from}
      />

      <TimeSelect
        name='to'
        label='До'
        control={control}
        error={errors.to}
      />

      <button type='submit'>Отправить</button>
      <button type='button' onClick={onReset}>Очистить</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </form>
  )
}

export default Form