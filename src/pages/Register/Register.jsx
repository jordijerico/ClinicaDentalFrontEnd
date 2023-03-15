import React from 'react'
import { InputText } from '../../common/InputText/InputText'
import './Register.css'
export const Register = () => {

    const registerFunction = () => {


        registerMe(credenciales)
            .then(
                userData => {
                    setTimeout(() => {
                        navigate("/")
                    }, 1000);
                }
            )
            .catch(error => console.log(error));
    }
    return (
        <div className='registerDesign'>
            <InputText
                type="text"
                name="name"
                placeholder="escribe un nombre"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <InputText
                type="text"
                name="surname"
                placeholder="escribe un apellido"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <InputText
                type="text"
                name="phone"
                placeholder="escribe un telefono"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <InputText
                type="email"
                name="email"
                placeholder="escribe un email"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <InputText
                type="password"
                name="password"
                placeholder="escribe tu contraseña"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div className='buttonRegisterDesign' onClick={() => registerFunction()}>Register</div>

        </div>
    )
}
