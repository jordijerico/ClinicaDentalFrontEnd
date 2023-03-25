import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getAllAppointmentsByUser } from '../../services/apiCalls'
import { userData } from '../userSlice'
import AppointmentCard from "../../common/AppointmentCard/AppointmentCard"
import "./Appointment.css"
import { useNavigate } from 'react-router-dom'
export const Appointment = () => {

    const navigate = useNavigate();
    const [getAppointments, setAppointments] = useState([])
    const datosCredencialesRedux = useSelector(userData);


    useEffect(() => {

        if (getAppointments.length == 0) {
            const getAllAppointments = async () => {
                try {
                    const appointments = await getAllAppointmentsByUser(datosCredencialesRedux.credentials?.token);

                    setAppointments(appointments.data.data)
                } catch (error) {
                    console.log(error)
                }


            }
            getAllAppointments();

        }

    }, [getAppointments]);


    return (
        <Container fluid className="appointmentDesign">
            <div className="titleAppointments">YOUR APPOINTMENTS</div>
            <div className='centerDiv'>
            <div className='btnNewAppt' onClick={()=> navigate("/newappointment")}> New Appointment</div>
            </div>
            <div className="gridAppointments">
            {getAppointments.map(appt => {
                return (            
                        <AppointmentCard key={appt.id} appointment={appt} />
                )
            })}
            </div>
            
        </Container>

    )
}
