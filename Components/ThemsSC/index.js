import React from 'react'
import { ThemeProvider } from 'styled-components'
const themeStyle = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
  background:{

  }
}
const ThemSC = ({children}) => {
  return (
    <ThemeProvider theme={themeStyle}>

      {children}
    </ThemeProvider>
  )
}

export default ThemSC
