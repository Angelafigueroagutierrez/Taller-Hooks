import React from 'react'
import { NavItem } from '../NavItem/NavItem';
import '../NavBar/NavBar.css'

export const NavBar = () => {
    return (
    <ul className='ulNav'>
        <NavItem to='/' content='Funcion Saludar'></NavItem>
        <NavItem to='/Calculadora' content=' Funcion Calculadora'></NavItem>
        <NavItem to='/Background' content=' Random Background'></NavItem>
        <NavItem to='/Registro' content='Funcion de Registro'></NavItem>
        <NavItem to='/Tareas' content='Generar Tareas'></NavItem>
    </ul>
    );
};