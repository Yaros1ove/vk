import { toDate } from 'date-fns'

export default function createFormDate({ date, time }) {
  const resultDate = toDate(date)

  resultDate.setHours(time.getHours())
  resultDate.setMinutes(time.getMinutes())

  return resultDate
}