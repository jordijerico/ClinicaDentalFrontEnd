import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { userData, userout } from '../../pages/userSlice'
import { Navigator } from '../Navigator/Navigator'
import './Header.css'
import logo from '../../assets/logo_clinica-removebg-preview.png'

export const Header = () => {
    const navigate = useNavigate();

    const datosCredencialesRedux = useSelector(userData);
    const dispatch = useDispatch();
    const logoutFunction = () => {

        dispatch(userout({ credentials: {} }));
        setTimeout(() => {
            navigate("/")
        }, 500);
    }


    return (
        <div className="headerDesign">
            {/* <div className='imagen'></div> */}
            {datosCredencialesRedux.credentials?.token ? (
                <>
                    <Navigator ruta={<img src={logo} width="100" height="30" />} destino={"/"} />
                    <div className='linksNav'>
                        <Navigator ruta={datosCredencialesRedux?.credentials?.usuario?.name} destino={"/profile"} />
                        <div className='logoutDesign' onClick={() => logoutFunction()}>logout</div>
                    </div>
                </>
            ) : (
                <>
                    <Navigator ruta={<img src={logo} width="100" height="30" />} destino={"/"} />
                    <div className='linksNav'>
                        <Navigator ruta={"Login"} destino={"/login"} />
                        <Navigator ruta={"Register"} destino={"/register"} />
                    </div>
                </>
            )}
        </div>
    )
}
