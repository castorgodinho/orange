import React from "react"
import { AppProps } from "next/app"
import { ThemeProvider } from "@/app/components/theme-provider"

export const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}): React.ReactElement => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)
