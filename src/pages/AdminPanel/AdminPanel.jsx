import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ClientCard from '../../common/ClientCard/ClientCard'
import { getAllClientsByAdmin } from '../../services/apiCalls'
import { userData } from '../userSlice'
import "./AdminPanel.css"
export const AdminPanel = () => {

    const [getClients, setClients] = useState([])
    const datosCredencialesRedux = useSelector(userData);


    useEffect(() => {
        console.log("HOLAAAAAAAAAAAAAAA");

        if (getClients.length == 0) {
            const getAllClients = async () => {
                try {
                    const clientes = await getAllClientsByAdmin(datosCredencialesRedux.credentials?.token);
                    setClients(clientes.data.data)
                } catch (error) {
                    console.log(error)
                }


            }
            getAllClients();

        }

    }, [getClients]);



    return (
        <Container fluid className="AdminPanelDesign">
            <div className="titleClients">CLIENTS</div>
            {getClients.map(client => {
                return (
                    <div className="gridClients" key={client.User.id}>
                        <ClientCard key={client.User.id} client={client.User} />

                    </div>
                )
            })}


        </Container>

    )
}
