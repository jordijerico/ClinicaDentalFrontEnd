import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../common/InputText/InputText';
import { newAppointment } from '../../services/apiCalls';
import "./NewAppointment.css"

export const NewAppointment = () => {
    const navigate = useNavigate();

    // const [fecha, setFecha] = useState(new Date());

    // useEffect(() => {

    //     console.log("Fecha escogida: ", dayjs(fecha).format('dddd DD MMMM YYYY'));

    //     let fechaBackend = dayjs(fecha).format("YYYY MM DD");

    //     console.log(fechaBackend)

    // }, [fecha]);


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
        console.log(credenciales);
        newAppointment(credenciales)
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
                placeholder="escribe la fecha"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            {/* <div>{credencialesError.nameError}</div> */}

            <InputText
                type="text"
                name="hour"
                placeholder="escribe la hora"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            {/* <div>{credencialesError.surnameError}</div> */}

            <InputText
                type="number"
                name="price"
                placeholder="escribe un precio"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            {/* <div>{credencialesError.phoneError}</div> */}

            <InputText
                type="text"
                name="about"
                placeholder="escribe una descripción"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            {/* <div>{credencialesError.emailError}</div> */}

            <InputText
                type="number"
                name="doctor_id"
                placeholder="escribe el doctor ID"
                changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            {/* <div>{credencialesError.passwordError}</div> */}




            <div className="btnNewAppt" onClick={() => {createAppointment()}} >
                create
            </div>

        </div>
    )
}
