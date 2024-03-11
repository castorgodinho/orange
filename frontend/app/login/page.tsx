"use client"
import React, { useState } from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { LoginValidation } from "@/app/helpers/login.helper"

const Login = (): React.ReactElement => {
  const [credentials, setCredentials] =
    useState<UserCredentials>(defaultCredential)
  const [validationError, setValidationError] = useState<ValidationError>(
    defaultValidationError
  )
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }
  const onLogin = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    LoginValidation(credentials, setValidationError)
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid sx={{ maxWidth: 545, p: 5 }}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <img src="/images/orange.png" width={100} height={100} />
              </Grid>
              <Grid item xs={8}>
                <ThemeProvider theme={theme}>
                  <Typography
                    variant="h2"
                    gutterBottom
                    sx={{
                      color: theme.palette.primary.main,
                      marginBottom: 0,
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    Orange
                  </Typography>
                </ThemeProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="username"
                  id="filled-basic"
                  label="Username"
                  variant="filled"
                  value={credentials.username}
                  onChange={onInputChange}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "small",
                    paddingLeft: "18px",
                  }}
                >
                  {validationError.username}
                </Typography>
              </ThemeProvider>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  name="password"
                  id="Password-basic"
                  label="Password"
                  variant="filled"
                  value={credentials.password}
                  onChange={onInputChange}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "small",
                    paddingLeft: "18px",
                  }}
                >
                  {validationError.password}
                </Typography>
              </ThemeProvider>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "#EE4700",
                    color: "white",
                    padding: 1,
                  }}
                  onClick={onLogin}
                >
                  LOGIN
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export interface UserCredentials {
  username: string
  password: string
}
const defaultCredential: UserCredentials = {
  username: "",
  password: "",
}
export interface ValidationError {
  username: string
  password: string
}
const defaultValidationError: ValidationError = {
  username: "",
  password: "",
}
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
export default Login
