import { Typography } from '@mui/material'
import Form from './components/Form.jsx'

function App() {
  return (
    <div className='App'>
      <Typography className='formHeader' variant='h4'>
        Бронирование переговорной комнаты
        </Typography>
      <Form></Form>
    </div>
  )
}

export default App