import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Columns from './components/columns/columns'
import { GlobalStyle } from './GlobalStyle'

function App() {

  return (
   <>
   <GlobalStyle/>
   <Header/>
   <Columns/>
  </>
  )
}

export default App
