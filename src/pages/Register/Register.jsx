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
