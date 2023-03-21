import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userData, userout } from '../../pages/userSlice'
import { Navigator } from '../Navigator/Navigator'
import './Header.css'
export const Header = () => {

    const datosCredencialesRedux = useSelector(userData);
    console.log(datosCredencialesRedux);
    const dispatch = useDispatch();
    const logoutFunction = () => {

        dispatch(userout({ credentials: {} , token : "" }));
    }



    return (
        <div className="headerDesign">
            <div className='imagen'></div>
            {datosCredencialesRedux.credentials?.token ? (
                <>
                <div className='profileButton' onClick={() => profileFunction()} >{datosCredencialesRedux?.credentials?.usuario?.name}</div>

                <div className='logoutDesign' onClick={() => logoutFunction()}>logout</div>
                </>
            ) : (

                <div className='linksNav'>
                    <Navigator ruta={"Home"} destino={"/"} />
                    <Navigator ruta={"Login"} destino={"/login"} />
                    <Navigator ruta={"Register"} destino={"/register"} />
                </div>
            )}
        </div>
    )
}
