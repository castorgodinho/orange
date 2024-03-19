"use client"
import React, { useState } from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { ThemeProvider } from "@mui/material/styles"
import { loginValidation } from "@/app/helpers/login.helper"
import { loginStyles } from "./styles/login-styles"
import { theme } from "@/styles/theme"
import axios from "../helpers/axios"

const Login = (): React.ReactElement => {
  const style = loginStyles(theme)
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
    loginValidation(credentials, setValidationError)
    axios.post("/login", credentials)
  }

  return (
    <div style={style.loginContainer}>
      <ThemeProvider theme={theme}>
        <Grid sx={style.loginGrid}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={4} sx={style.logoGrid}>
                <img src="/images/orange.png" style={style.logo} />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h2" gutterBottom sx={style.title}>
                  Orange
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="username"
                  label="Username"
                  variant="filled"
                  value={credentials.username}
                  onChange={onInputChange}
                  sx={style.inputfield}
                />
              </Grid>
              <Typography
                variant="h6"
                gutterBottom
                sx={style.errorMessageStyle}
              >
                {validationError.username}
              </Typography>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  variant="filled"
                  value={credentials.password}
                  onChange={onInputChange}
                  sx={style.inputfield}
                />
              </Grid>
              <Typography
                variant="h6"
                gutterBottom
                sx={style.errorMessageStyle}
              >
                {validationError.password}
              </Typography>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={style.loginButton}
                  onClick={onLogin}
                >
                  LOGIN
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
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

export default Login
