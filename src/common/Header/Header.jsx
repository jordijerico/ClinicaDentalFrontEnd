import React from 'react'
import { Container } from 'react-bootstrap'
import { Navigator } from '../Navigator/Navigator'
import './Header.css'
export const Header = () => {
    return (
        <div className="headerDesign">
            <div className='imagen'></div>
            <div className='linksNav'>
            <Navigator ruta={"Home"} destino={"/"} />
            <Navigator ruta={"Login"} destino={"/login"} />
            <Navigator ruta={"Register"} destino={"/register"} />
            </div>
        </div>
    )
}
