import { Theme } from "@mui/material/styles"

export const loginStyles = (theme: Theme): StyleObject => {
  return {
    loginContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    loginGrid: {
      maxWidth: 545,
      p: 5,
    },
    logoGrid: {
      textAlign: "right",
    },
    logo: {
      width: 100,
      height: 100,
    },
    inputfield: {
      width: "100%",
    },
    title: {
      color: theme.palette.primary.main,
      marginBottom: 0,
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      height: "100%",
    },
    errorMessageStyle: {
      color: theme.palette.secondary.main,
      fontSize: "small",
      paddingLeft: "18px",
    },

    loginButton: {
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      color: "white",
      padding: 1,
    },
  }
}

type StyleObject = { [key: string]: React.CSSProperties }
