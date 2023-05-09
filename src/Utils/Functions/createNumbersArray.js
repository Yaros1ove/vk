export default function createNumbersArray(minValue = 1, maxValue = 10) {

  const array = []

  for (let i = minValue; i <= maxValue; i++) {
    array.push(i)
  }

  return array
}