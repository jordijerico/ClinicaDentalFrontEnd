import Card from 'react-bootstrap/Card';
import "./AppointmentCard.css"
export function AppointmentCard({ appointment }) {
    return (
        <Card className='cardStyle' style={{ border: '0.2em solid lightblue' }}>
            <Card.Body>

                <Card.Title style={{ textAlign: 'center', fontSize: 'large' }}>{"Appointment ID: " + appointment.id}</Card.Title>
                <Card.Text className='cardtext gridStyle'  style={{ display: 'grid' }}>
                
                    <p className='ptitle'> Date:</p> {appointment.date} <br />
                    <p className='ptitle'> Hour:</p> {appointment.hour} <br />
                    <p className='ptitle'> Price:</p>{appointment.price + "€"} <br />
                    <p className='ptitle'> About:</p>{appointment.about} <br />
                    <p className='ptitle'> Doctor:</p> {appointment.doctor_id} <br />
                    <p className='ptitle'> Client:</p>{appointment.client_id} <br />


                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default AppointmentCard;