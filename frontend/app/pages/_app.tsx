import React from "react"
import { AppProps } from "next/app"
import ThemeProvider from "@/app/components/themeProvider"

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}): React.ReactElement => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
console.log("hello")
export default MyApp
