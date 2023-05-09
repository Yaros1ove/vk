export default function getDate(dateDescription) {

  switch (dateDescription) {
    case 'yearAfter':
      const currentYear = new Date()
      currentYear.setFullYear(currentYear.getFullYear() + 1)
      return currentYear

    case 'yesterday':
      const today = new Date()
      today.setDate(today.getDate() - 1)
      return today

    case 'today':
    default:
      return new Date()
  }

}