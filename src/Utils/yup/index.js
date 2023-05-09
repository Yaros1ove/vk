import * as yup from 'yup'

import { formErrors } from '../../Constants/Errors'

import getDate from '../Functions/getDate'
import getTime from '../Functions/getTime'


const schema = yup.object({
  tower: yup.string()
    .required(formErrors.TOWER_REQUIRED),

  floor: yup.number()
    .required(formErrors.FLOOR_REQUIRED),

  negotiation: yup.number()
    .required(formErrors.NEGOTIATION_REQUIRED),

  date: yup.date()
    .typeError(formErrors.DATE_INVALID)
    .min(getDate('yesterday'), formErrors.DATE_MIN)
    .max(getDate('yearAfter'), formErrors.DATE_MAX)
    .required(formErrors.DATE_REQUIRED),

  from: yup.date()
    .typeError(formErrors.TIME_INVALID)
    .min(getTime('7:59Am'), formErrors.TIME_MIN)
    .max(getTime('10Pm'), formErrors.TIME_MAX)
    .required(formErrors.FROM_REQUIRED),

  to: yup.date()
    .typeError(formErrors.TIME_INVALID)
    .min(getTime('7:59Am'), formErrors.TIME_MIN)
    .max(getTime('10Pm'), formErrors.TIME_MAX)
    .required(formErrors.TO_REQUIRED),

  comment: yup.string(),
})

export default schema