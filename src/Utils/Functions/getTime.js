export default function getTime(timeDescription) {
  const now = new Date()

  switch (timeDescription) {

    case '8Am':
      now.setHours(8)
      now.setMinutes(0)
      return now

    case '7:59Am':
      now.setHours(7)
      now.setMinutes(59)
      return now

    case '10Pm':
      now.setHours(22)
      now.setMinutes(0)
      return now

    case 'now':
    default:
      return now

  }
}