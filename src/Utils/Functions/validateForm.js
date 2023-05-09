import { formErrors } from '../../Constants/Errors'

import { isBefore } from 'date-fns'


export default function validateForm(form) {
  const validationResult = {
    error: null,
    data: form,
  }

  const from = form.from
  const to = form.to

  if (!isBefore(from, to)) {
    validationResult.error = formErrors.FROM_BEFORE_TO
  }

  return validationResult
}