"use client"
import React, { useState } from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

interface Credentials {
  username: string
  password: string
}
interface Err {
  username: string
  password: string
}

const Login = (): React.ReactElement => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  })
  const [err, setErr] = useState<Err>({
    username: "",
    password: "",
  })

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }
  const handleForm = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const regexPatternPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    const regexPatternUsername = /^[a-zA-Z0-9_]{3,20}$/
    const isUsernameValid = regexPatternUsername.test(credentials.username)
    const isPasswordValid = regexPatternPassword.test(credentials.password)

    if (!isUsernameValid) {
      setErr((prevErr) => ({
        ...prevErr,
        username:
          "Username must consist of alphanumeric characters or underscores, and be between 3 and 20 characters long.",
      }))
    } else {
      setErr((prevErr) => ({
        ...prevErr,
        username: "",
      }))
    }

    if (!isPasswordValid) {
      setErr((prevErr) => ({
        ...prevErr,
        password:
          "Password must contain at least one alphabetical character (uppercase or lowercase), one digit, one special character (@$!%*#?&), and be at least 8 characters long.",
      }))
    } else {
      setErr((prevErr) => ({
        ...prevErr,
        password: "",
      }))
    }
    if (isUsernameValid && isPasswordValid) {
      setErr({
        username: "",
        password: "",
      })
    }
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
        <form onSubmit={handleForm}>
          <Grid sx={{ maxWidth: 545, p: 5 }}>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <img
                    src="https://png.pngtree.com/element_our/png/20180903/orange-png-png_75700.jpg"
                    alt="Orange"
                    width={100}
                    height={100}
                    align="center"
                    align="right"
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant="h2"
                    gutterBottom
                    color="orange"
                    align="center"
                    align="left"
                  >
                    Orange
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="username"
                    id="filled-basic"
                    label="Username"
                    variant="filled"
                    value={credentials.username}
                    onChange={handleInputChange}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  {err.username}
                  {err.username}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="password"
                    id="Password-basic"
                    label="Password"
                    variant="filled"
                    value={credentials.password}
                    onChange={handleInputChange}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  {err.password}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "100%" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  )
}
export default Page
