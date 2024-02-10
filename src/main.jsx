import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import AppRoutes from './routers'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <AppRoutes/>
    </ThemeProvider>
  </React.StrictMode>,
)
