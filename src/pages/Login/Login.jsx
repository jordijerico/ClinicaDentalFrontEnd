import React, { useState } from 'react'
import { InputText } from '../../common/InputText/InputText'
import { loginMe } from '../../services/apiCalls';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { login } from "../userSlice"
import { decodeToken } from 'react-jwt';
export const Login = () => {

    const dispatch = useDispatch();


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


    const loginFunction = async () => {

        try {
            const loginResult = await loginMe(credenciales)
            if (loginResult.data.success) {
                try {
                    const decoded = decodeToken(loginResult.data.data)
                    let datosBackend = {

                        token: loginResult.data.data,
                        usuario: decoded

                    }

                    dispatch(login({ credentials: datosBackend }));

                    setTimeout(() => {
                        navigate("/")
                    }, 1000);
                } catch (error) {
                    console.log(error);
                }
            }

        } catch (error) {
            console.log(error);
        }

    }


    return (
        <Container fluid className="loginDesign">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
            <InputText
                type="email"
                name="email"
                placeholder="escribe un email"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.emailError}</div>
            <InputText
                type="password"
                name="password"
                placeholder="escribe un password"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.passwordError}</div>
            <div className='buttonLoginDesign' onClick={() => loginFunction()}>Log me</div>
        </Container>
    )
}
