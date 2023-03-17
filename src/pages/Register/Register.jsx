import React, { useState } from 'react'
import { InputText } from '../../common/InputText/InputText'
import './Register.css'
import { registerMe } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'
export const Register = () => {
    const navigate = useNavigate();

    const [credenciales, setCredenciales] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: "",

    });

    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };


    const registerFunction = () => {

        registerMe(credenciales)
            .then(
                userData => {
                    setTimeout(() => {
                        navigate("/login")
                    }, 1000);
                }
            )
            .catch(error => console.log(error));
    }


    return (
        <div className='registerDesign'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M16 19h6"></path>
                <path d="M19 16v6"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
            </svg>
            <InputText
                type="text"
                name="name"
                placeholder="escribe un nombre"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            <InputText
                type="text"
                name="surname"
                placeholder="escribe un apellido"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            <InputText
                type="text"
                name="phone"
                placeholder="escribe un telefono"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            <InputText
                type="email"
                name="email"
                placeholder="escribe un email"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            <InputText
                type="password"
                name="password"
                placeholder="escribe tu contraseña"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            <div className='buttonRegisterDesign' onClick={() => registerFunction()}>Register</div>

        </div>
    )
}
