"use client"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import useLoginValidation from "../helpers/useLoginValidation"

const Login = (): React.ReactElement => {
  const [credentials, loginFormValidationError, handleInputChange, handleForm] =
    useLoginValidation()

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
                    src="/images/orange.png"
                    width={100}
                    height={100}
                    align="center"
                    align="right"
                  />
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
                    onChange={handleInputChange}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  {loginFormValidationError.username}
                  {loginFormValidationError.username}
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
                  {loginFormValidationError.password}
                </Grid>
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
                  >
                    LOGIN
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

export default Login

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5733",
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      contrastText: "#47008F",
    },
  },
})
