"use client"
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import { LoginValidation } from '../helpers/login.helper'

const Login = (): React.ReactElement => {
  interface UserCredentials {
    username: string
    password: string
  }
  const defaultCredential: UserCredentials = {
    username: "",
    password: ""
  }
  interface ValidationError {
    username: string
    password: string
  }
  const defaultValidationError: ValidationError = {
    username: "",
    password: ""
  }
  const [credentials, setCredentials] = useState<UserCredentials>(defaultCredential)
  const [loginFormValidationError, setLoginFormValidationError] = useState<ValidationError>(defaultValidationError)
  const [errorReceived, setErrorReceived] = useState<ValidationError>(defaultValidationError)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setCredentials({
      ...credentials,
      [name]: value
    })
  }
  const onLogin = (event) => {
    event.preventDefault()
    const errorReceived = LoginValidation(credentials, setCredentials, loginFormValidationError, setLoginFormValidationError)
    setErrorReceived(errorReceived)
  }

  return (<>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={onLogin}>
            <Grid sx={{ maxWidth: 545, p: 5 }}>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <img src="/images/orange.png" width={100} height={100} align="center" align="right"/>
                          </Grid>
                      <Grid item xs={8}>
                        <ThemeProvider theme={theme}>
                          <Typography variant="h2" gutterBottom sx={{ color: theme.palette.primary.main, marginBottom: 0, display: "flex", justifyContent: "left", alignItems: "center", height:"100%" }}>
                            Orange
                          </Typography>
                        </ThemeProvider>
                      </Grid>
                  <Grid item xs={12}>
                    <TextField type="text" name="username" id="filled-basic" label="Username" variant="filled" value={credentials.username} onChange={handleInputChange} sx={{ width: '100%' }}/>
                  </Grid>
                  <Grid item xs={12}>
                    <ThemeProvider theme={theme}>
                      <Typography variant='h6' gutterBottom sx={{color: theme.palette.secondary.main, fontSize:"small"}}>
                        {errorReceived.username}
                      </Typography>
                    </ThemeProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="password" name="password" id="Password-basic" label="Password" variant="filled" value={credentials.password} onChange={handleInputChange} sx={{ width: '100%' }}/>
                  </Grid>
                  <Grid item xs={12}>
                  <ThemeProvider theme={theme}>
                      <Typography variant='h6' gutterBottom sx={{color: theme.palette.secondary.main, fontSize:"small"}}>
                      {errorReceived.password}
                      </Typography>
                    </ThemeProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" sx={{ width: '100%', backgroundColor: '#EE4700', color: 'white', padding:1 }} >LOGIN</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  )
}


export default Login

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5733",
    },
    secondary: {
      main: "#f61919",
      light: "#F5EBFF",
      contrastText: "#47008F",
    },
  },
})
