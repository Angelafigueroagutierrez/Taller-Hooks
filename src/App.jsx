import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import {Header} from './layouts/Header/Header'
import {Footer} from './layouts/Footer/Footer'
import { Main } from './layouts/Main/Main'
import { Calculadora1 } from './pages/Calculadora/Calculadora'
import { Background1 } from './pages/Background/Background'
import { Registro1 } from './pages/Registro/Registro'
import { Tareas1 } from './pages/Tareas/Tareas'
import { NotFound } from './pages/NotFound/NotFound'

export function App() {
  
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Calculadora' element={<Calculadora1/>}/>
      <Route path='/Background' element={<Background1/>}/>
      <Route path='/Registro' element={<Registro1/>}/>
      <Route path='/Tareas' element={<Tareas1/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/> 
    </>
  )
}
