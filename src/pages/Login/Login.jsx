import React, { useState } from 'react'
import { InputText } from '../../common/InputText/InputText'
import { loginMe, profile } from '../../services/apiCalls';
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
            console.log(loginResult.data.data);
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
