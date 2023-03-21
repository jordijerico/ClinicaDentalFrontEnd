import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import userSlice, { userData } from '../userSlice'
import './Profile.css'
export const Profile = () => {


    const perfil = useSelector(userData);
// console.log(perfil);
    return (
        <Container fluid className="profileDesign">
            {/* {perfil?.credentials?.token !== "" ? (
                <>
            <div>Nombre: {perfil.credentials.usuario.name}</div>
            <div>Apellido: {perfil.credentials.usuario.surname}</div>
            <div>Phone: {perfil.credentials.usuario.phone}</div>
            <div>Email: {perfil.credentials.usuario.email}</div>

            </>
            ) : 
            (<div>Loading profile...</div>)} */}
            </Container>
    
    )
}
