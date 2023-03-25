import Card from 'react-bootstrap/Card';
import "./AppointmentCard.css"
export function AppointmentCard({ appointment }) {
    return (
        <Card className='cardStyle' style={{ border: '0.2em solid lightblue' }}>
            <Card.Body>

                <Card.Title style={{ textAlign: 'center', fontSize: 'large' }}>{"Appointment ID: " + appointment.id}</Card.Title>
                <Card.Text className='cardtext gridStyle' style={{ display: 'grid', fontSize: 'large', fontWeight: '500' }}>

                    Date: {appointment.date} <br />
                    Hour: {appointment.hour} <br />
                    Price: {appointment.price + "€"} <br />
                    About: {appointment.about} <br />
                    Doctor: {appointment.doctor_id} <br />

                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default AppointmentCard;