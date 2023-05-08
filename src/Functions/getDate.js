export default function getDate(dateDescription) {

  switch (dateDescription) {
    case 'yearAfter':
      const currentYear = new Date()
      currentYear.setFullYear(currentYear.getFullYear() + 1)
      return currentYear

    case 'today':
    default:
      return new Date()
  }

}