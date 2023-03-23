import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { userData } from '../userSlice'
import './Profile.css'
export const Profile = () => {


    const perfil = useSelector(userData);
    return (
        <Container fluid className="profileDesign">
            {perfil?.credentials?.token !== undefined ? (
                <>
                <p className='titleProfile'>PROFILE DATA</p> 
                    <div className='profileData'> 
                        <div>Nombre: {perfil.credentials.usuario.name}</div> <hr />
                        <div>Apellido: {perfil.credentials.usuario.surname}</div><hr />
                        <div>Phone: {perfil.credentials.usuario.phone}</div><hr />
                        <div>Email: {perfil.credentials.usuario.email}</div><hr />
                    </div>
                </>
            ) :
                (<div>Loading profile...</div>)}
        </Container>

    )
}
