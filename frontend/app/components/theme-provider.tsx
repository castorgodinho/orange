import React, { ReactNode } from "react"
import { theme } from "@/styles/theme"
import { ThemeProvider } from "@mui/material/styles"

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}): React.ReactElement => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

interface ThemeProviderProps {
  children: ReactNode
}
