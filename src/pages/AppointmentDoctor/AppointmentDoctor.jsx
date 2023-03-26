import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getAllAppointmentsByDoctor } from '../../services/apiCalls'
import { userData } from '../userSlice'
import AppointmentCard from "../../common/AppointmentCard/AppointmentCard"
import "./AppointmentDoctor.css"
export const AppointmentDoctor = () => {

    const [getAppointments, setAppointments] = useState([])
    const datosCredencialesRedux = useSelector(userData);


    useEffect(() => {

        if (getAppointments.length == 0) {
            const getAllAppointmentsDoctor = async () => {
                try {
                    const appointments = await getAllAppointmentsByDoctor(datosCredencialesRedux.credentials?.token);

                    setAppointments(appointments.data.data)
                } catch (error) {
                    console.log(error)
                }


            }
            getAllAppointmentsDoctor();

        }

    }, [getAppointments]);


    return (
        <Container fluid className="appointmentDesign">
            <div className="titleAppointments">YOUR APPOINTMENTS</div>
            <div className='centerDiv'>
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
