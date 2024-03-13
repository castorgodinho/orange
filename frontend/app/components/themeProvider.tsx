import React, { ReactNode } from "react"
import theme from "@/styles/theme"
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}): React.ReactElement => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
console.log("hello")
export default ThemeProvider
