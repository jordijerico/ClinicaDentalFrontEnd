import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../common/InputText/InputText';
import { newAppointment } from '../../services/apiCalls';
import { userData } from '../userSlice';
import "./NewAppointment.css"

export const NewAppointment = () => {
    const navigate = useNavigate();


    const datosCredencialesRedux = useSelector(userData);

    const [credenciales, setCredenciales] = useState({
        date: "",
        hour: "",
        price: "",
        about: "",
        doctor_id: "",
        client_id: 3

    });



    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };


    const createAppointment = () => {
        newAppointment(credenciales, datosCredencialesRedux.credentials?.token)
            .then(
                appointmentData => {
                    setTimeout(() => {
                        navigate("/appointments")
                    }, 1000);
                }
            )
            .catch(error => console.log(error));
    }



    return (


        <div className='newAppointmentFormDesign'>
            <div>NEW APPOINTMENT</div>

            <InputText
                type="date"
                name="date"
                placeholder="Escribe la fecha"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            {/* <div>{credencialesError.nameError}</div> */}

            <InputText
                type="text"
                name="hour"
                placeholder="Escribe la hora (hh:mm:ss)"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            {/* <div>{credencialesError.surnameError}</div> */}

            <InputText
                type="number"
                name="price"
                placeholder="Escribe un precio"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            {/* <div>{credencialesError.phoneError}</div> */}

            <InputText
                type="text"
                name="about"
                placeholder="Escribe una descripción"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            {/* <div>{credencialesError.emailError}</div> */}

            <InputText
                type="number"
                name="doctor_id"
                placeholder="Escribe el doctor ID"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            {/* <div>{credencialesError.passwordError}</div> */}




            <div className="btnNewAppt" onClick={() => { createAppointment() }} >
                create
            </div>

        </div>
    )
}
