import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Criar tema */}
    <ThemeProvider theme={theme}>

      {/* Add CSS Baseline tirar o FOUC */}
      <CssBaseline />

      {/* Adicionar o componente App */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)
