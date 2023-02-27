import { Box } from '@mui/material'
import { Button, TextField } from '@mui/material'
import { iParams } from '../../interfaces/interfaces'

interface FormProps {
  callData: (params: iParams) => void
  setParams: (params: iParams) => void
  params: iParams

}

const Form = ({ callData, params, setParams }: FormProps) => {


  const handleChange = (event: any) => {
    setParams({ name: event.target.value, page: 1 })
  }

  const form = {
    box: {
      width: 300,
      height: 100,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    textField: {
      width: '100%',
      marginBottom: '15px'
    }
  }

  return (
    <Box sx={form.box}>
      <TextField sx={form.textField} id="outlined-basic" label="Busca un repositorio de github" variant="outlined" onChange={handleChange} />
      <Button variant="contained" onClick={() => callData(params)}>Buscar</Button>
    </Box>
  )
}

export default Form