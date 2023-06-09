import React, { useEffect, useState } from 'react'
import { InputText } from '../../common/InputText/InputText'
import './Register.css'
import { registerMe } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'
import { validate } from '../../helpers/useful';

export const Register = () => {
    const navigate = useNavigate();

    const [credenciales, setCredenciales] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: "",

    });

    const [credencialesError, setCredencialesError] = useState({
        nameError: "",
        surnameError: "",
        phoneError: "",
        emailError: "",
        passwordError: "",
    });


    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };



    const [registerAct, setRegisterAct] = useState(false);


    useEffect(() => {


        //Recorremos el primer for in para ver si hay errores en las credenciales....
        for (let error in credencialesError) {
            if (credencialesError[error] !== "" && credenciales !== "") {
                setRegisterAct(false);
                return;
            }
        }
        setRegisterAct(true);
    });


    const inputValidate = (e) => {


        let error = "";

        let checked = validate(
            e.target.name,
            e.target.value,
        );

        error = checked.message;


        setCredencialesError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
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
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.nameError}</div>

            <InputText
                type="text"
                name="surname"
                placeholder="escribe un apellido"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.surnameError}</div>

            <InputText
                type="text"
                name="phone"
                placeholder="escribe un telefono"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.phoneError}</div>

            <InputText
                type="email"
                name="email"
                placeholder="escribe un email"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.emailError}</div>

            <InputText
                type="password"
                name="password"
                placeholder="escribe tu contraseña"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.passwordError}</div>




            <div
                className="buttonRegisterDesign"
                onClick={
                    registerAct
                        ? () => {
                            registerFunction();
                        }
                        : () => { }
                }
            >
                Register
            </div>

        </div>
    )
}
