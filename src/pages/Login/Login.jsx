import React, { useState } from 'react'
import { InputText } from '../../common/InputText/InputText'
import { loginMe } from '../../services/apiCalls';
import './Login.css'
import { useNavigate } from 'react-router-dom';
export const Login = () => {

    const navigate = useNavigate();
    const [credenciales, setCredenciales] = useState({
        email: "",
        password: "",
    });

    const [credencialesError, setCredencialesError] = useState({
        emailError: "",
        passwordError: "",
    });




    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };


    const inputValidate = (e) => {
        switch (e.target.name) {
            case "email":
                break;

            case "password":

                if (credenciales.password.length < 8) {
                    setCredencialesError((prevState) => ({
                        ...prevState,
                        passwordError: "Debes escribir como mínimo 8 caracteres",
                    }));
                } else {
                    setCredencialesError((prevState) => ({
                        ...prevState,
                        passwordError: "",
                    }));

                }

                break;

            default:
                console.log("uff....");
        }
    };

    const loginFunction = () => {
        //Validacion inputs pendiente!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


        loginMe(credenciales)
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
        <div className="loginDesign">
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
                placeholder="escribe un password"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.passwordError}</div>

            <div className='buttonLoginDesign' onClick={() => loginFunction()}>Log me</div>
        </div>
    )
}
