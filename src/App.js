import { Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'black',
    color: 'white',
  },
}))
function App() {
  const classes = useStyles()
  return (
    <div>
      <Typography variant='h3' align='center' color={'tan'}>
        This is App Component
      </Typography>
      <Button className={classes.button} size='medium'>
        Material UI
      </Button>
    </div>
  )
}

export default App
